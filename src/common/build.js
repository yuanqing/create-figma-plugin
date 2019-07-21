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
  await buildPluginCommandsBundle(commands, isDevelopment)
  await buildPluginUiBundle(commands, isDevelopment)
  return Promise.resolve()
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

function buildPluginCommandsBundle (commands, isDevelopment) {
  return buildBundle(
    commands,
    pluginCommandsModuleKey,
    join(
      __dirname,
      'webpack-entry-file-templates',
      'plugin-commands-entry-file.js'
    ),
    {
      filename: pluginCommandsBuildFileName
    },
    isDevelopment
  )
}

function buildPluginUiBundle (commands, isDevelopment) {
  return buildBundle(
    commands,
    pluginUiModuleKey,
    join(__dirname, 'webpack-entry-file-templates', 'plugin-ui-entry-file.js'),
    {
      filename: pluginUiBuildFileName,
      library: '__ui__',
      libraryTarget: 'window'
    },
    isDevelopment
  )
}

module.exports = build
