import { outputFile } from 'fs-extra'
import { join } from 'path'
import { constants } from '@create-figma-plugin/common'

const pluginCodeFilePath = join(
  constants.buildDirectoryName,
  constants.pluginCodeFileName
)
const pluginUiFilePath = join(
  constants.buildDirectoryName,
  constants.pluginUiFileName
)

export async function buildManifest (config, hasPluginCommands, hasPluginUi) {
  const manifest = {
    name: config.name,
    api: constants.apiVersion
  }
  const menu = config.menu
  if (menu.length > 0) {
    manifest.main = pluginCodeFilePath
    if (hasUiBundle(menu)) {
      manifest.ui = pluginUiFilePath
    }
    manifest.menu = normaliseMenu(menu)
  }
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(constants.manifestFilePath, string)
}

function hasUiBundle (menu) {
  return (
    menu.filter(function (item) {
      return typeof item.ui !== 'undefined'
    }).length > 0
  )
}

function normaliseMenu (menu) {
  return menu.map(function (item) {
    return {
      name: item.name,
      command: item.command
    }
  })
}
