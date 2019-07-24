import { exists } from 'fs-extra'
import { join } from 'path'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'
import { createWebpackConfig } from './create-webpack-config'
import { buildWebpackEntryFile } from './build-webpack-entry-file'

const webpackConfigMutatorPath = join(
  process.cwd(),
  constants.webpackConfigMutatorFileName
)

const entryFileTemplateDirectoryPath = join(
  __dirname,
  'webpack-entry-file-templates'
)

export async function buildBundle (menu, isDevelopment) {
  const entry = {}
  const codeEntryFile = await buildWebpackEntryFile(
    menu,
    'command',
    join(entryFileTemplateDirectoryPath, 'plugin-code-entry-file.js')
  )
  if (codeEntryFile) {
    entry.code = codeEntryFile
  }
  const uiEntryFile = await buildWebpackEntryFile(
    menu,
    'ui',
    join(entryFileTemplateDirectoryPath, 'plugin-ui-entry-file.js')
  )
  if (uiEntryFile) {
    entry.ui = uiEntryFile
  }
  const webpackConfig = createWebpackConfig({ ...entry }, isDevelopment)
  if (await exists(webpackConfigMutatorPath)) {
    require(webpackConfigMutatorPath).default(webpackConfig)
  }
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (stats.hasErrors()) {
        reject(stats.toJson().errors.join('\n'))
        return
      }
      if (error) {
        reject(error)
        return
      }
      resolve(true)
    })
  })
}
