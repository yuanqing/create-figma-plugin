import { pathExists } from 'fs-extra'
import { join } from 'path'
import * as slugify from '@sindresorhus/slugify'
import { constants } from './constants'
import { Command, Config, File, RelaunchButton } from './types/config'
import {
  RawCommand,
  RawConfig,
  RawFile,
  RawRelaunchButtons,
  RawSeparator
} from './types/raw-config'

const defaultConfig: Config = {
  apiVersion: constants.apiVersion,
  id: constants.packageJson.defaultPluginName,
  name: constants.packageJson.defaultPluginName,
  commandId: 'index.js--default',
  main: { src: 'index.js', handler: 'default' },
  ui: null,
  menu: null,
  relaunchButtons: null
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
        ? null
        : parseRelaunchButtons(relaunchButtons)
  }
}

function parseCommand (command: RawCommand): Command {
  const { name, main, ui, menu } = command
  const result: any = {}
  result.name = name
  result.commandId = typeof main === 'undefined' ? null : parseCommandId(main)
  result.main = typeof main === 'undefined' ? null : parseFile(main)
  result.ui = typeof ui === 'undefined' ? null : parseFile(ui)
  result.menu =
    typeof menu === 'undefined'
      ? null
      : menu.map(function (command: RawCommand | RawSeparator) {
          if (command === '-') {
            return '-'
          }
          return parseCommand(command)
        })
  return result
}

function parseRelaunchButtons (
  relaunchButtons: RawRelaunchButtons
): Array<RelaunchButton> {
  const result = []
  for (const commandId in relaunchButtons) {
    const { name, main, ui, multipleSelection } = relaunchButtons[commandId]
    if (typeof main === 'undefined') {
      throw new Error(`Need a "main" for relaunch button ${name}`)
    }
    result.push({
      name,
      commandId,
      main: parseFile(main),
      ui: typeof ui === 'undefined' ? null : parseFile(ui),
      multipleSelection:
        typeof multipleSelection === 'undefined' ? false : multipleSelection
    })
  }
  return result
}

function parseCommandId (main: RawFile): string {
  if (typeof main === 'string') {
    return `${main}--default`
  }
  const { src, handler } = main
  if (typeof handler === 'undefined') {
    return `${src}--default`
  }
  return `${src}--${handler}`
}

function parseFile (file: RawFile): File {
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
