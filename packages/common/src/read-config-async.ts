import { pathExists } from 'fs-extra'
import { join } from 'path'
import * as slugify from '@sindresorhus/slugify'
import { constants } from './constants'
import {
  Config,
  ConfigCommand,
  ConfigCommandFile,
  ConfigRelaunchButton
} from './types/config'
import {
  RawConfig,
  RawConfigCommand,
  RawConfigCommandFile,
  RawConfigRelaunchButtons
} from './types/raw-config'

const defaultConfig: Config = {
  apiVersion: constants.apiVersion,
  id: constants.packageJson.defaultPluginName,
  name: constants.packageJson.defaultPluginName,
  commandId: 'index.js--default',
  main: { src: 'index.js', handler: 'default' },
  ui: undefined,
  menu: undefined,
  relaunchButtons: undefined
}

export async function readConfigAsync (): Promise<Config> {
  const packageJsonPath = join(process.cwd(), 'package.json')
  if ((await pathExists(packageJsonPath)) === false) {
    return defaultConfig
  }
  const packageJson = require(packageJsonPath)
  const config: RawConfig = packageJson[constants.packageJson.configKey]
  if (typeof config === 'undefined' || Object.keys(config).length === 0) {
    return defaultConfig
  }
  const { apiVersion, id, name, main, ui, menu, relaunchButtons } = config
  return {
    apiVersion:
      typeof apiVersion === 'undefined' ? constants.apiVersion : apiVersion,
    id: typeof id === 'undefined' ? slugify(name) : id,
    ...parseCommand({ name, main, ui, menu }),
    relaunchButtons:
      typeof relaunchButtons === 'undefined'
        ? undefined
        : parseRelaunchButtons(relaunchButtons)
  }
}

function parseCommand (command: {
  name: string
  main?: RawConfigCommandFile
  ui?: RawConfigCommandFile
  menu?: Array<RawConfigCommand>
}): {
  name: string
  commandId: undefined | string
  main: undefined | ConfigCommandFile
  ui: undefined | ConfigCommandFile
  menu: undefined | Array<ConfigCommand>
} {
  const { name, main, ui, menu } = command
  const result: any = {}
  result.name = name
  result.commandId =
    typeof main === 'undefined' ? undefined : parseCommandId(main)
  result.main = typeof main === 'undefined' ? undefined : parseFile(main)
  result.ui = typeof ui === 'undefined' ? undefined : parseFile(ui)
  result.menu =
    typeof menu === 'undefined'
      ? undefined
      : menu.map(function (command: RawConfigCommand) {
          if (command === '-') {
            return { separator: true }
          }
          return parseCommand(command)
        })
  return result
}

function parseRelaunchButtons (
  relaunchButtons: RawConfigRelaunchButtons
): Array<ConfigRelaunchButton> {
  const result = []
  for (const commandId in relaunchButtons) {
    const { name, main, ui, multipleSelection } = relaunchButtons[commandId]
    result.push({
      name,
      commandId,
      main: parseFile(main),
      ui: typeof ui === 'undefined' ? undefined : parseFile(ui),
      multipleSelection:
        typeof multipleSelection === 'undefined' ? false : multipleSelection
    })
  }
  return result
}

function parseCommandId (main: RawConfigCommandFile): string {
  if (typeof main === 'string') {
    return `${main}--default`
  }
  const { src, handler } = main
  if (typeof handler === 'undefined') {
    return `${src}--default`
  }
  return `${src}--${handler}`
}

function parseFile (file: RawConfigCommandFile): ConfigCommandFile {
  if (typeof file === 'string') {
    return {
      src: file,
      handler: 'default'
    }
  }
  const { src, handler } = file
  if (typeof handler === 'undefined') {
    return {
      src,
      handler: 'default'
    }
  }
  return { src, handler }
}
