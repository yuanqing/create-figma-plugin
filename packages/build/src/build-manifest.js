import { constants } from '@create-figma-plugin/common'
import { outputFile } from 'fs-extra'

export async function buildManifest (config) {
  const result = {
    name: config.name,
    id: config.id,
    api: constants.apiVersion
  }
  if (hasBundle(config, 'command') === true) {
    result.main = constants.build.pluginCodeFilePath
  }
  if (hasBundle(config, 'ui') === true) {
    result.ui = constants.build.pluginUiFilePath
  }
  const menu = config.menu
  if (typeof menu !== 'undefined') {
    result.menu = normaliseMenu(menu)
  }
  const string = JSON.stringify(result) + '\n'
  return outputFile(constants.build.manifestFilePath, string)
}

function hasBundle (config, key) {
  if (typeof config[key] !== 'undefined') {
    return true
  }
  return (
    typeof config.menu !== 'undefined' &&
    config.menu.filter(function (item) {
      return typeof item[key] !== 'undefined'
    }).length > 0
  )
}

function normaliseMenu (menu) {
  return menu.map(function (item) {
    if (typeof item.separator !== 'undefined') {
      return item
    }
    const result = {
      name: item.name
    }
    if (typeof item.id !== 'undefined') {
      result.command = item.id
    }
    if (typeof item.menu !== 'undefined') {
      result.menu = normaliseMenu(item.menu)
    }
    return result
  })
}
