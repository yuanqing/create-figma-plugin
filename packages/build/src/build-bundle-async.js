import { constants } from '@create-figma-plugin/common'
import findUp from 'find-up'
import { basename, extname } from 'path'
import tempWrite from 'temp-write'
import webpack from 'webpack'
import { createWebpackConfig } from './create-webpack-config'

export async function buildBundleAsync (config, isDevelopment) {
  const entry = {}
  const mainEntryFile = await createMainEntryFileAsync(config)
  if (mainEntryFile !== null) {
    const key = extractBasename(constants.build.pluginCodeFilePath)
    entry[key] = mainEntryFile
  }
  const uiEntryFile = await createUiEntryFileAsync(config)
  if (uiEntryFile !== null) {
    const key = extractBasename(constants.build.pluginUiFilePath)
    entry[key] = uiEntryFile
  }
  let webpackConfig = createWebpackConfig(entry, isDevelopment)
  const customWebpackConfigPath = await findUp(
    constants.build.webpackConfigFileName
  )
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

async function createMainEntryFileAsync (config) {
  const mainModules = []
  extractModule(config, 'main', mainModules)
  if (mainModules.length === 0) {
    return null
  }
  if (typeof config.relaunchButtons !== 'undefined') {
    extractModules(config.relaunchButtons, 'main', mainModules)
  }
  return tempWrite(`
    require('@create-figma-plugin/utilities/src/events');
    const mainModules = ${createRequireCode(mainModules)};
    const command = ${
      mainModules.length > 1 ? 'figma.command' : `'${mainModules[0].command}'`
    };
    mainModules[command]();
  `)
}

async function createUiEntryFileAsync (config) {
  const uiModules = []
  extractModule(config, 'ui', uiModules)
  if (uiModules.length === 0) {
    return null
  }
  if (typeof config.relaunchButtons !== 'undefined') {
    extractModules(config.relaunchButtons, 'ui', uiModules)
  }
  return tempWrite(`
    require('@create-figma-plugin/utilities/src/events');
    const rootNode = document.getElementById('create-figma-plugin');
    const uiModules = ${createRequireCode(uiModules)};
    if (typeof uiModules[__COMMAND__] === 'undefined') {
      throw new Error(
        'UI not defined for the command corresponding to ' + __COMMAND__
      )
    }
    uiModules[__COMMAND__](rootNode, __DATA__, __COMMAND__);
  `)
}

function extractModules (items, key, result) {
  items.forEach(function (item) {
    extractModule(item, key, result)
  })
}

function extractModule (config, key, result) {
  const command = config.command
  const item = config[key]
  if (typeof item !== 'undefined' && item !== null) {
    result.push({
      command: typeof config.id === 'undefined' ? command : '',
      ...item
    })
  }
  if (typeof config.menu !== 'undefined') {
    extractModules(config.menu, key, result)
  }
}

function createRequireCode (modules) {
  const code = []
  modules.forEach(function (item) {
    code.push(`'${item.command}':require('${item.src}')['${item.handler}']`)
  })
  return `{${code.join(',')}}`
}

function extractBasename (filename) {
  const extension = extname(filename)
  return basename(filename, extension)
}
