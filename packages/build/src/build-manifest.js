import { outputFile } from 'fs-extra'
import { join } from 'path'
import { constants } from '@create-figma-plugin/common'

export async function buildManifest (config, hasPluginCommands, hasPluginUi) {
  const menu = createMenu(config.menu)
  const manifest = {
    name: config.name,
    api: constants.apiVersion
  }
  if (hasPluginCommands) {
    manifest.main = join(
      constants.buildDirectoryName,
      constants.pluginCommandsFileName
    )
  }
  if (hasPluginUi) {
    manifest.ui = join(constants.buildDirectoryName, constants.pluginUiFileName)
  }
  manifest.menu = menu
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(constants.manifestFilePath, string)
}

function createMenu (menu) {
  return menu.map(function (item) {
    if (item === '-') {
      return {
        separator: true
      }
    }
    return item
  })
}
