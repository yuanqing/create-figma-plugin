const { readFile } = require('fs-extra')
const { join } = require('path')
const tempWrite = require('temp-write')
const webpack = require('webpack')
const { sourceDirectory } = require('./constants')
const createWebpackConfig = require('./create-webpack-config')

async function buildBundle (
  commands,
  moduleKey,
  entryFileTemplatePath,
  buildFileName,
  isDevelopment
) {
  const requires = mapCommandsToRequires(commands, moduleKey)
  const entryFilePath = await buildWebpackEntryFile(
    entryFileTemplatePath,
    requires
  )
  const webpackConfig = createWebpackConfig(
    entryFilePath,
    buildFileName,
    isDevelopment
  )
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (stats.hasErrors()) {
        reject(stats.toJson().errors.join('\n'))
        return
      }
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

function mapCommandsToRequires (commands, moduleKey) {
  return commands.map(function (command) {
    const requirePath = join(process.cwd(), sourceDirectory, command)
    return `'${command}': require('${requirePath}')['${moduleKey}']`
  })
}

async function buildWebpackEntryFile (entryFileTemplatePath, requires) {
  const entryFileTemplate = await readFile(entryFileTemplatePath, 'utf8')
  const fileContent = entryFileTemplate.replace(/__REQUIRES__/, `{${requires}}`)
  return tempWrite(fileContent)
}

module.exports = buildBundle
