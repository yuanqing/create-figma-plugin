import { join } from 'path'
import { constants, readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'
import { watch } from './watch'

const pluginCommandsEntryFileTemplatePath = join(
  __dirname,
  'webpack-entry-file-templates',
  'plugin-commands-entry-file.js'
)
const pluginUiEntryFileTemplatePath = join(
  __dirname,
  'webpack-entry-file-templates',
  'plugin-ui-entry-file.js'
)

export async function build (isDevelopment, isWatch) {
  if (isWatch) {
    return watch()
  }
  const config = readConfig()
  const pluginCommandModules = createModules(config.menu, 'command')
  const hasPluginCommands = pluginCommandModules.length > 0
  if (hasPluginCommands) {
    await buildBundle(
      pluginCommandModules,
      pluginCommandsEntryFileTemplatePath,
      {
        filename: constants.pluginCommandsFileName
      },
      isDevelopment
    )
  }
  const pluginUiModules = createModules(config.menu, 'ui')
  const hasPluginUi = pluginUiModules.length > 0
  if (hasPluginUi) {
    await buildBundle(
      pluginUiModules,
      pluginUiEntryFileTemplatePath,
      {
        filename: constants.pluginUiFileName,
        library: '__ui__',
        libraryTarget: 'window'
      },
      isDevelopment
    )
  }
  return buildManifest(config, hasPluginCommands, hasPluginUi)
}

function createModules (commands, srcKey) {
  const modules = []
  commands.forEach(function (item) {
    if (item.command && item[srcKey]) {
      modules.push({
        id: item.command,
        src: item[srcKey]
      })
    }
  })
  return modules
}
