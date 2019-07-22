import { readFile } from 'fs-extra'
import { join } from 'path'
import tempWrite from 'temp-write'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'
import { createWebpackConfig } from './create-webpack-config'

export async function buildBundle (
  modules,
  entryFileTemplatePath,
  outputConfig,
  isDevelopment
) {
  const entryFilePath = await buildWebpackEntryFile(
    modules,
    entryFileTemplatePath
  )
  const webpackConfig = createWebpackConfig(
    entryFilePath,
    outputConfig,
    isDevelopment
  )
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

async function buildWebpackEntryFile (modules, entryFileTemplatePath) {
  const __REQUIRES__ = createRequireCode(modules)
  const __COMMAND__ =
    modules.length > 1 ? 'figma.command' : `'${modules[0].id}'`
  const entryFileTemplate = await readFile(entryFileTemplatePath, 'utf8')
  const fileContent = entryFileTemplate
    .replace(/__REQUIRES__/g, __REQUIRES__)
    .replace(/__COMMAND__/g, __COMMAND__)
  return tempWrite(fileContent)
}

function createRequireCode (modules) {
  const result = []
  modules.forEach(function (item, index) {
    const requirePath = join(process.cwd(), constants.sourceDirectory, item.src)
    if (require(requirePath) == null) {
      return
    }
    result.push(`'${item.id}': require('${requirePath}').default`)
  })
  return `
    const __requires__ = {
      ${result.join(',')}
    };
  `
}
