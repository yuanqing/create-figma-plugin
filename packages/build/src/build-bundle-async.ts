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

export async function buildBundleAsync (
  config: Config,
  isDevelopment: boolean
): Promise<void> {
  const entry: webpack.Entry = {}
  const { name, commandId, main, ui, menu, relaunchButtons } = config
  const command = { name, commandId, main, ui, menu }
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

async function createMainEntryFileAsync (
  command: ConfigCommand,
  relaunchButtons: null | Array<ConfigRelaunchButton>
): Promise<string | null> {
  const modules: Array<EntryFile> = []
  extractModule(command, 'main', modules)
  if (modules.length === 0) {
    return null
  }
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'main', modules)
  }
  return tempWrite(`
    require('@create-figma-plugin/utilities/lib/events');
    const mainModules = ${createRequireCode(modules)};
    const command = ${
      modules.length > 1 ? 'figma.command' : `'${modules[0].commandId}'`
    };
    mainModules[command]();
  `)
}

async function createUiEntryFileAsync (
  command: ConfigCommand,
  relaunchButtons: null | Array<ConfigRelaunchButton>
): Promise<string | null> {
  const modules: EntryFile[] = []
  extractModule(command, 'ui', modules)
  if (modules.length === 0) {
    return null
  }
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'ui', modules)
  }
  return tempWrite(`
    require('@create-figma-plugin/utilities/lib/events');
    const rootNode = document.getElementById('create-figma-plugin');
    const uiModules = ${createRequireCode(modules)};
    if (typeof uiModules[__COMMAND__] === 'undefined') {
      throw new Error(
        'UI not defined for the command corresponding to ' + __COMMAND__
      )
    }
    uiModules[__COMMAND__](rootNode, __DATA__, __COMMAND__);
  `)
}

function extractModules (
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

function extractModule (
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
        src,
        handler
      })
    }
  }
  const menu = (command as ConfigCommand).menu
  if (menu !== null) {
    extractModules(menu, key, result)
  }
}

function createRequireCode (entryFiles: Array<EntryFile>): string {
  const code: string[] = []
  for (const entryFile of entryFiles) {
    code.push(
      `'${entryFile.commandId}':require('${entryFile.src}')['${entryFile.handler}']`
    )
  }
  return `{${code.join(',')}}`
}

function extractBasename (filename: string): string {
  const extension = extname(filename)
  return basename(filename, extension)
}
