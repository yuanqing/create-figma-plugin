import { join } from 'path'
import { constants } from './constants'

export function readConfig () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  const packageJson = require(packageJsonPath)
  const config = packageJson[constants.packageJsonConfigKey]
  return {
    ...config,
    menu: normaliseMenu(config.menu)
  }
}

function normaliseMenu (menu) {
  if (!menu) {
    return []
  }
  return menu.map(function (item) {
    if (item === '-') {
      return { separator: true }
    }
    return item
  })
}
