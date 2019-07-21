const { exists, outputFile, readFile } = require('fs-extra')
const globby = require('globby')
const isUtf8 = require('is-utf8')
const mustache = require('mustache')
const { join } = require('path')
const promptForUserInput = require('./prompt-for-user-input')

async function init (pluginName) {
  const pluginDirectoryPath = join(process.cwd(), pluginName)
  if (await exists(pluginDirectoryPath)) {
    return Promise.reject(
      new Error(`Directory already exists: ${pluginDirectoryPath}`)
    )
  }
  const config = await promptForUserInput(pluginName)
  return buildPluginDirectory(
    pluginDirectoryPath,
    {
      ...config,
      pluginName
    }
  )
}

async function buildPluginDirectory (pluginDirectoryPath, config) {
  const templateDirectory = join(__dirname, 'template')
  const filePaths = await globby('**/*', {
    cwd: templateDirectory,
    dot: true
  })
  return Promise.all(
    filePaths.map(async function (filePath) {
      const absolutePath = join(templateDirectory, filePath)
      const buffer = await readFile(absolutePath)
      const outputPath = join(
        pluginDirectoryPath,
        filePath
      )
      const fileContents = isUtf8(buffer)
        ? interpolate(buffer.toString(), config)
        : buffer
      return outputFile(outputPath, fileContents)
    })
  )
}

mustache.escape = function (text) {
  return text
}
function interpolate (string, data) {
  return mustache.render(string, data)
}

module.exports = init
