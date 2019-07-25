import { exists } from 'fs-extra'
import { join } from 'path'
import { constants } from './constants'

const defaultConfig = {
  name: 'plugin',
  command: 'index.js'
}

export async function readConfig () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  if ((await exists(packageJsonPath)) === false) {
    return defaultConfig
  }
  const packageJson = require(packageJsonPath)
  const config = packageJson[constants.packageJson.configKey]
  if (typeof config === 'undefined' || Object.keys(config).length === 0) {
    return defaultConfig
  }
  return createMenuItem(config)
}

function createMenuItem (config) {
  const result = {}
  result.name = config.name
  if (config.command) {
    result.command = config.command
  }
  if (config.ui) {
    result.ui = config.ui
  }
  if (config.menu) {
    result.menu = normaliseMenu(config.menu)
  }
  return result
}

function normaliseMenu (menu) {
  const result = []
  menu.forEach(function (item) {
    if (item === '-') {
      result.push({ separator: true })
      return
    }
    if (item) {
      result.push(createMenuItem(item))
    }
  })
  return result
}
