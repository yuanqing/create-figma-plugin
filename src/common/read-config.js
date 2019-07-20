const { join } = require('path')
const { packageJsonConfigKey } = require('./constants')

function readConfig () {
  const packageJsonPath = join(process.cwd(), 'package.json')
  const packageJson = require(packageJsonPath)
  return packageJson[packageJsonConfigKey]
}

module.exports = readConfig
