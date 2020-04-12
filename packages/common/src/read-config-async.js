import { exists } from 'fs-extra'
import { join } from 'path'
import slugify from '@sindresorhus/slugify'
import { constants } from './constants'

const defaultConfig = {
  apiVersion: constants.apiVersion,
  name: constants.packageJson.defaultPluginName,
  id: constants.packageJson.defaultPluginId,
  command: { src: 'index.js', handler: 'default' },
  relaunchButtons: []
}

export async function readConfigAsync () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  if ((await exists(packageJsonPath)) === false) {
    return defaultConfig
  }
  const packageJson = require(packageJsonPath)
  const config = packageJson[constants.packageJson.configKey]
  if (typeof config === 'undefined' || Object.keys(config).length === 0) {
    return defaultConfig
  }
  return {
    ...parseCommand(config),
    apiVersion:
      typeof config.apiVersion !== 'undefined'
        ? config.apiVersion
        : constants.apiVersion,
    id: typeof config.id === 'undefined' ? slugify(config.name) : config.id,
    relaunchButtons: parseRelaunchButtons(config.relaunchButtons)
  }
}

function parseCommand (config) {
  const { name, command, ui, menu } = config
  const result = {}
  result.name = name
  if (typeof command !== 'undefined') {
    result.id =
      typeof command === 'string'
        ? `${command}--default`
        : `${command.src}--${command.handler}`
    result.command = parseFile(command)
    result.ui = parseFile(ui)
  }
  if (typeof menu !== 'undefined') {
    result.menu = []
    menu.forEach(function (item) {
      if (item === '-') {
        result.menu.push({ separator: true })
        return
      }
      if (typeof item !== 'undefined') {
        result.menu.push(parseCommand(item))
      }
    })
  }
  return result
}

function parseRelaunchButtons (relaunchButtons) {
  if (typeof relaunchButtons === 'undefined') {
    return []
  }
  const result = []
  for (const id in relaunchButtons) {
    const { name, command, ui } = relaunchButtons[id]
    result.push({
      id,
      name,
      command: parseFile(command),
      ui: parseFile(ui)
    })
  }
  return result
}

function parseFile (src) {
  if (typeof src === 'undefined') {
    return null
  }
  return typeof src === 'string' ? { src, handler: 'default' } : src
}
