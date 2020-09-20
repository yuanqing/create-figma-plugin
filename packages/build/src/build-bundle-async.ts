import {
  Config,
  ConfigCommand,
  ConfigCommandSeparator,
  ConfigFile,
  ConfigRelaunchButton,
  constants
} from '@create-figma-plugin/common'
import * as findUp from 'find-up'
import { basename, extname } from 'path'
import * as tempWrite from 'temp-write'
import * as webpack from 'webpack'

import { createWebpackConfig } from './create-webpack-config'

interface EntryFile extends ConfigFile {
  commandId: string
}

export async function buildBundleAsync(
  config: Config,
  isDevelopment: boolean
): Promise<void> {
  const entry: webpack.Entry = {}
  const { name, commandId, main, ui, menu, relaunchButtons } = config
  const command = { commandId, main, menu, name, ui }
  const mainEntryFile = await createMainEntryFileAsync(command, relaunchButtons)
  if (mainEntryFile !== null) {
    const key = extractBasename(constants.build.pluginCodeFilePath)
    entry[key] = mainEntryFile
  }
  const uiEntryFile = await createUiEntryFileAsync(command, relaunchButtons)
  if (uiEntryFile !== null) {
    const key = extractBasename(constants.build.pluginUiFilePath)
    entry[key] = uiEntryFile
  }
  let webpackConfig: webpack.Configuration = createWebpackConfig(
    entry,
    isDevelopment
  )
  const customWebpackConfigPath = await findUp(
    constants.build.webpackConfigFileName
  )
  if (typeof customWebpackConfigPath !== 'undefined') {
    webpackConfig = require(customWebpackConfigPath)(webpackConfig)
  }
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, function (error, stats) {
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

async function createMainEntryFileAsync(
  command: ConfigCommand,
  relaunchButtons: null | Array<ConfigRelaunchButton>
): Promise<null | string> {
  const modules: Array<EntryFile> = []
  extractModule(command, 'main', modules)
  if (modules.length === 0) {
    return null
  }
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'main', modules)
  }
  const fileContent = `
    require('@create-figma-plugin/utilities/lib/events');
    const modules = ${createRequireCode(modules)};
    const commandId = (figma.command === '' || ${modules.length === 1}) ? '${
    modules[0].commandId
  }' : figma.command;
    modules[commandId]();
  `
  return tempWrite(fileContent)
}

async function createUiEntryFileAsync(
  command: ConfigCommand,
  relaunchButtons: null | Array<ConfigRelaunchButton>
): Promise<null | string> {
  const modules: EntryFile[] = []
  extractModule(command, 'ui', modules)
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'ui', modules)
  }
  if (modules.length === 0) {
    return null
  }
  const fileContent = `
    require('@create-figma-plugin/utilities/lib/events');
    const rootNode = document.getElementById('create-figma-plugin');
    const modules = ${createRequireCode(modules)};
    const commandId = __FIGMA_COMMAND__ === '' ? '${
      modules[0].commandId
    }' : __FIGMA_COMMAND__;
    if (typeof modules[commandId] === 'undefined') {
      throw new Error(
        'UI not defined for the command corresponding to ' + commandId
      );
    }
    modules[commandId](rootNode, __SHOW_UI_DATA__);
  `
  return tempWrite(fileContent)
}

function extractModules(
  items: Array<ConfigCommandSeparator | ConfigCommand | ConfigRelaunchButton>,
  key: 'ui' | 'main',
  result: Array<EntryFile>
): void {
  for (const item of items) {
    if ('separator' in item) {
      continue
    }
    extractModule(item, key, result)
  }
}

function extractModule(
  command: ConfigCommand | ConfigRelaunchButton,
  key: 'ui' | 'main',
  result: Array<EntryFile>
): void {
  const commandId = command.commandId
  if (commandId !== null) {
    const item = command[key] as null | ConfigFile
    if (item !== null) {
      const { src, handler } = item
      result.push({
        commandId,
        handler,
        src
      })
    }
  }
  if ('menu' in command && command.menu !== null) {
    extractModules(command.menu, key, result)
  }
}

function createRequireCode(entryFiles: Array<EntryFile>): string {
  const code: string[] = []
  for (const entryFile of entryFiles) {
    code.push(
      `'${entryFile.commandId}':require('${entryFile.src}')['${entryFile.handler}']`
    )
  }
  return `{${code.join(',')}}`
}

function extractBasename(filename: string): string {
  const extension = extname(filename)
  return basename(filename, extension)
}
