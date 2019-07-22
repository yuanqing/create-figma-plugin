import { outputFile } from 'fs-extra'
import { join } from 'path'
import { constants } from '@create-figma-plugin/common'

const pluginCommandsFilePath = join(
  constants.buildDirectoryName,
  constants.pluginCommandsFileName
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
  if (hasPluginCommands) {
    manifest.main = pluginCommandsFilePath
  }
  if (hasPluginUi) {
    manifest.ui = pluginUiFilePath
  }
  const menu = config.menu
  if (menu.length > 1) {
    manifest.menu = menu
  }
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(constants.manifestFilePath, string)
}
