import { exists } from 'fs-extra'
import { join } from 'path'
import { constants } from './constants'

const defaultName = 'plugin'
const defaultConfig = {
  name: defaultName,
  menu: [
    {
      command: 'index.js'
    }
  ]
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
  return {
    name: config.name || packageJson.name || defaultName,
    command: config.command || null,
    ui: config.ui || null,
    menu: normaliseMenu(config.menu)
  }
}

function normaliseMenu (menu) {
  if (typeof menu === 'undefined') {
    return null
  }
  const result = []
  menu.forEach(function (item) {
    if (item === '-') {
      result.push({ separator: true })
    }
    if (item && item.command) {
      result.push(item)
    }
  })
  return result
}
