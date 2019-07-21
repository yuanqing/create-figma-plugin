import { join } from 'path'
import { constants } from './constants'

export function readConfig () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  const packageJson = require(packageJsonPath)
  return packageJson[constants.packageJsonConfigKey]
}
