const { outputFile } = require('fs-extra')
const { join } = require('path')
const {
  apiVersion,
  buildDirectoryName,
  buildFileName,
  manifestFilePath
} = require('./constants')

async function buildManifest (config) {
  const manifest = await createManifest(config)
  const string = JSON.stringify(manifest, null, 2) + '\n'
  return outputFile(manifestFilePath, string)
}

function createManifest (config) {
  const menu = createMenu(config.menu)
  return {
    name: config.name,
    api: apiVersion,
    main: join(buildDirectoryName, buildFileName),
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
