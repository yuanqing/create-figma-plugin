import { constants } from '@create-figma-plugin/common'
import findUp from 'find-up'
import { basename, extname } from 'path'
import webpack from 'webpack'
import { createWebpackConfig } from './create-webpack-config'
import { buildWebpackEntryFile } from './build-webpack-entry-file'

export async function buildBundle (config, isDevelopment) {
  const entry = {}
  const commandEntryFile = await buildWebpackEntryFile(
    config,
    'command',
    `
      require('@create-figma-plugin/utilities/lib/events/command-events');
      modules[command]();
    `
  )
  if (commandEntryFile) {
    entry[
      extractBasename(constants.build.pluginCodeFilePath)
    ] = commandEntryFile
  }
  const uiEntryFile = await buildWebpackEntryFile(
    config,
    'ui',
    `
      require('@create-figma-plugin/utilities/lib/events/ui-events');
      const rootNode = document.getElementById('create-figma-plugin');
      modules[command](rootNode);
    `
  )
  if (uiEntryFile) {
    entry[extractBasename(constants.build.pluginUiFilePath)] = uiEntryFile
  }
  let webpackConfig = createWebpackConfig(entry, isDevelopment)
  const customWebpackConfigPath = await findUp(constants.configFileName)
  if (typeof customWebpackConfigPath !== 'undefined') {
    webpackConfig = require(customWebpackConfigPath)(webpackConfig)
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
      resolve()
    })
  })
}

function extractBasename (filename) {
  const extension = extname(filename)
  return basename(filename, extension)
}
