const { outputFile } = require('fs-extra')
const { join } = require('path')
const { constants } = require('@create-figma-plugin/common')

async function buildManifest (config) {
  const manifest = await createManifest(config)
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(constants.manifestFilePath, string)
}

function createManifest (config) {
  const menu = createMenu(config.menu)
  return {
    name: config.name,
    api: constants.apiVersion,
    main: join(constants.buildDirectoryName, constants.pluginCommandsFileName),
    ui: join(constants.buildDirectoryName, constants.pluginUiFileName),
    menu
  }
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

module.exports = buildManifest
