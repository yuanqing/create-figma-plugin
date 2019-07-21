import { join } from 'path'
import { constants } from './constants'

export function readConfig () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  const packageJson = require(packageJsonPath)
  const config = packageJson[constants.packageJsonConfigKey]
  if (config.command) {
    const { command, menu, ...rest } = config
    return {
      ...rest,
      menu: [
        {
          name: config.name,
          command
        },
        ...(menu || [])
      ]
    }
  }
  return config
}
