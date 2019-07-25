import { exists } from 'fs-extra'
import { basename, extname, join } from 'path'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'
import { createWebpackConfig } from './create-webpack-config'
import { buildWebpackEntryFile } from './build-webpack-entry-file'

const entryFileTemplateDirectoryPath = join(
  __dirname,
  'webpack-entry-file-templates'
)
const pluginCodeEntryFileTemplate = join(
  entryFileTemplateDirectoryPath,
  'plugin-code-entry-file.js'
)
const pluginUiEntryFileTemplate = join(
  entryFileTemplateDirectoryPath,
  'plugin-ui-entry-file.js'
)

export async function buildBundle (menu, isDevelopment) {
  const entry = {}
  const codeEntryFile = await buildWebpackEntryFile(
    menu,
    constants.packageJson.pluginCodeKey,
    pluginCodeEntryFileTemplate
  )
  if (codeEntryFile) {
    const key = extractBasename(constants.build.pluginCodeFilePath)
    entry[key] = codeEntryFile
  }
  const uiEntryFile = await buildWebpackEntryFile(
    menu,
    constants.packageJson.pluginUiKey,
    pluginUiEntryFileTemplate
  )
  if (uiEntryFile) {
    const key = extractBasename(constants.build.pluginUiFilePath)
    entry[key] = uiEntryFile
  }
  const webpackConfigMutatorPath = join(process.cwd(), constants.configFileName)
  let webpackConfig = createWebpackConfig(entry, isDevelopment)
  if (await exists(webpackConfigMutatorPath)) {
    webpackConfig = require(webpackConfigMutatorPath).default(webpackConfig)
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

function extractBasename (filename) {
  const extension = extname(filename)
  return basename(filename, extension)
}
