import { exists } from 'fs-extra'
import { join } from 'path'
import slugify from '@sindresorhus/slugify'
import { constants } from './constants'

const defaultConfig = {
  apiVersion: constants.apiVersion,
  name: constants.packageJson.defaultPluginName,
  id: constants.packageJson.defaultPluginName,
  command: 'index.js--default',
  main: { src: 'index.js', handler: 'default' },
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
  const { name, main, ui, menu } = config
  const result = {}
  result.name = name
  if (typeof main !== 'undefined') {
    result.command =
      typeof main === 'string'
        ? `${main}--default`
        : `${main.src}--${main.handler}`
    result.main = parseFile(main)
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
  for (const command in relaunchButtons) {
    const { main, ui, ...rest } = relaunchButtons[command]
    result.push({
      command,
      main: parseFile(main),
      ui: parseFile(ui),
      ...rest
    })
  }
  return result
}

function parseFile (file) {
  if (typeof file === 'undefined') {
    return null
  }
  if (typeof file === 'string') {
    return {
      src: file,
      handler: 'default'
    }
  }
  if (typeof file.src === 'undefined') {
    return null
  }
  if (typeof file.handler === 'undefined') {
    return {
      src: file.src,
      handler: 'default'
    }
  }
  return file
}
