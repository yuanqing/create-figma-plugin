import { join } from 'path'
import { constants, readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'
import { watch } from './watch'

export async function build (isDevelopment, isWatch) {
  if (isWatch) {
    return watch()
  }
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
    constants.pluginCommandsModuleExportKey,
    join(
      __dirname,
      'webpack-entry-file-templates',
      'plugin-commands-entry-file.js'
    ),
    {
      filename: constants.pluginCommandsFileName
    },
    isDevelopment
  )
}

function buildPluginUiBundle (commands, isDevelopment) {
  return buildBundle(
    commands,
    constants.pluginUiModuleExportKey,
    join(__dirname, 'webpack-entry-file-templates', 'plugin-ui-entry-file.js'),
    {
      filename: constants.pluginUiFileName,
      library: '__ui__',
      libraryTarget: 'window'
    },
    isDevelopment
  )
}
