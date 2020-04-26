import { constants } from '@create-figma-plugin/common'
import { outputFile } from 'fs-extra'

export async function buildManifestAsync (config) {
  const result = {
    name: config.name,
    id: config.id,
    api: config.apiVersion
  }
  if (hasBundle(config, 'main') === true) {
    result.main = constants.build.pluginCodeFilePath
  }
  if (hasBundle(config, 'ui') === true) {
    result.ui = constants.build.pluginUiFilePath
  }
  if (typeof config.menu !== 'undefined') {
    result.menu = normalizeMenu(config.menu)
  }
  if (
    typeof config.relaunchButtons !== 'undefined' &&
    config.relaunchButtons.length > 0
  ) {
    result.relaunchButtons = normalizeMenu(config.relaunchButtons)
  }
  const string = JSON.stringify(result) + '\n'
  return outputFile(constants.build.manifestFilePath, string)
}

function hasBundle (config, key) {
  if (typeof config[key] !== 'undefined' && config[key] !== null) {
    return true
  }
  return (
    typeof config.menu !== 'undefined' &&
    config.menu.filter(function (item) {
      return hasBundle(item, key)
    }).length > 0
  )
}

function normalizeMenu (menu) {
  return menu.map(function (item) {
    if (typeof item.separator !== 'undefined') {
      return item
    }
    const result = {
      name: item.name
    }
    if (typeof item.command !== 'undefined') {
      result.command = item.command
    }
    if (typeof item.menu !== 'undefined') {
      result.menu = normalizeMenu(item.menu)
    }
    return result
  })
}
