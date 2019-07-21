const { join } = require('path')
const buildBundle = require('./build-bundle')
const buildManifest = require('./build-manifest')
const {
  pluginCommandsModuleKey,
  pluginCommandsBuildFileName,
  pluginUiModuleKey,
  pluginUiBuildFileName
} = require('./constants')
const readConfig = require('./read-config')

async function build (isDevelopment) {
  const config = readConfig()
  await buildManifest(config)
  const commands = extractCommands(config.menu)
  await buildBundle(
    commands,
    pluginCommandsModuleKey,
    join(
      __dirname,
      'webpack-entry-file-templates',
      'plugin-commands-entry-file.js'
    ),
    pluginCommandsBuildFileName,
    isDevelopment
  )
  await buildBundle(
    commands,
    pluginUiModuleKey,
    join(__dirname, 'webpack-entry-file-templates', 'plugin-ui-entry-file.js'),
    pluginUiBuildFileName,
    isDevelopment
  )
}

function extractCommands (menu) {
  const results = []
  menu.forEach(function (item) {
    if (item === '-') {
      return
    }
    results.push(item.command)
  })
  return results
}

module.exports = build
