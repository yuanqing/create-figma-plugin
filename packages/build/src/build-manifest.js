import { outputFile } from 'fs-extra'
import { constants } from '@create-figma-plugin/common'

export async function buildManifest (config) {
  const manifest = {
    name: config.name,
    api: constants.apiVersion
  }
  const menu = config.menu
  if (menu.length > 0) {
    manifest.main = constants.build.pluginCodeFilePath
    if (hasUiBundle(menu)) {
      manifest.ui = constants.build.pluginUiFilePath
    }
    if (menu.length > 1) {
      manifest.menu = normaliseMenu(menu)
    }
  }
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(constants.build.manifestFilePath, string)
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
