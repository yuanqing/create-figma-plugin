import { constants } from '@create-figma-plugin/common'
import findUp from 'find-up'
import { basename, extname } from 'path'
import tempWrite from 'temp-write'
import webpack from 'webpack'
import { createWebpackConfig } from './create-webpack-config'

export async function buildBundle (config, isDevelopment) {
  const entry = {}
  const commandModules = extractModules(config, 'command')
  if (commandModules.length > 0) {
    const commandEntryFile = await tempWrite(`
      const modules = ${createRequireCode(commandModules)};
      global.__command__ = ${
        commandModules.length > 1
          ? 'figma.command'
          : `'${commandModules[0].id}'`
      };
      require('@create-figma-plugin/utilities/lib/events/command-events');
      modules[global.__command__]();
    `)
    entry[
      extractBasename(constants.build.pluginCodeFilePath)
    ] = commandEntryFile
  }
  const uiModules = extractModules(config, 'ui')
  if (uiModules.length > 0) {
    const uiEntryFile = await tempWrite(`
      const modules = ${createRequireCode(uiModules)};
      require('@create-figma-plugin/utilities/lib/events/ui-events');
      const rootNode = document.getElementById('create-figma-plugin');
      modules[window.__command__](rootNode, window.__data__, window.__command__);
    `)
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

function extractModules (config, key, result = []) {
  const src = config[key]
  if (src) {
    const id = config.command
    if (id) {
      result.push({
        id,
        src
      })
    }
  }
  const menu = config.menu
  if (menu) {
    menu.forEach(function (item) {
      extractModules(item, key, result)
    })
  }
  return result
}

function createRequireCode (modules) {
  const code = []
  modules.forEach(function (item) {
    code.push(`'${item.id}':require('${item.src}').default`)
  })
  return `{${code.join(',')}}`
}

function extractBasename (filename) {
  const extension = extname(filename)
  return basename(filename, extension)
}
