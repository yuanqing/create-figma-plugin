import { constants } from '@create-figma-plugin/common'
import findUp from 'find-up'
import { basename, extname } from 'path'
import tempWrite from 'temp-write'
import webpack from 'webpack'
import { createWebpackConfig } from './create-webpack-config'

export async function buildBundle (config, isDevelopment) {
  const entry = {}
  const commandEntryFile = await createCommandEntryFile(config)
  if (commandEntryFile !== null) {
    const key = extractBasename(constants.build.pluginCodeFilePath)
    entry[key] = commandEntryFile
  }
  const uiEntryFile = await createUiEntryFile(config)
  if (uiEntryFile !== null) {
    const key = extractBasename(constants.build.pluginUiFilePath)
    entry[key] = uiEntryFile
  }
  let webpackConfig = createWebpackConfig(entry, isDevelopment)
  const customWebpackConfigPath = await findUp(constants.configFileName)
  if (typeof customWebpackConfigPath !== 'undefined') {
    webpackConfig = require(customWebpackConfigPath)(webpackConfig)
  }
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (stats.hasErrors() === true) {
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

async function createCommandEntryFile (config) {
  const modules = extractModules(config, 'command')
  if (modules.length === 0) {
    return null
  }
  return tempWrite(`
    const modules = ${createRequireCode(modules)}
    global.__command__ = ${
      modules.length > 1 ? 'figma.command' : `'${modules[0].id}'`
    };
    require('@create-figma-plugin/utilities/lib/events');
    modules[global.__command__]();
  `)
}

async function createUiEntryFile (config) {
  const modules = extractModules(config, 'ui')
  if (modules.length === 0) {
    return null
  }
  return tempWrite(`
    const modules = ${createRequireCode(modules)}
    require('@create-figma-plugin/utilities/lib/events');
    const rootNode = document.getElementById('create-figma-plugin');
    modules[window.__command__](rootNode, window.__data__, window.__command__);
  `)
}

function extractModules (config, key, result = []) {
  const src = config[key]
  if (typeof src !== 'undefined') {
    if (typeof config.command !== 'undefined') {
      result.push({
        id: config.id,
        src,
        handler: key === 'command' ? config.handler : 'default'
      })
    }
  }
  const menu = config.menu
  if (typeof menu !== 'undefined') {
    menu.forEach(function (item) {
      extractModules(item, key, result)
    })
  }
  return result
}

function createRequireCode (modules) {
  const code = []
  modules.forEach(function (item) {
    code.push(`'${item.id}':require('${item.src}')['${item.handler}']`)
  })
  return `{${code.join(',')}}`
}

function extractBasename (filename) {
  const extension = extname(filename)
  return basename(filename, extension)
}
