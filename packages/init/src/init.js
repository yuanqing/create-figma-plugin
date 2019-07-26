import degit from 'degit'
import { copy, ensureDir, exists, outputFile, readFile } from 'fs-extra'
import globby from 'globby'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import { join } from 'path'
import { promptForUserInput } from './prompt-for-user-input'

mustache.escape = function (text) {
  return text
}

const defaultConfig = {
  name: 'plugin',
  template: 'default'
}

export async function init (options, useDefault) {
  if (typeof options.name !== 'undefined') {
    await throwIfDirectoryExists(join(process.cwd(), options.name))
  }
  const config = useDefault ? defaultConfig : await promptForUserInput(options)
  const pluginDirectoryPath = join(process.cwd(), config.name)
  await throwIfDirectoryExists(pluginDirectoryPath)
  await buildPluginDirectoryFromTemplate(pluginDirectoryPath, config.template)
  return interpolateConfigValues(pluginDirectoryPath, config)
}

async function throwIfDirectoryExists (directory) {
  if (await exists(directory)) {
    return Promise.reject(new Error(`Directory already exists: ${directory}`))
  }
}

async function buildPluginDirectoryFromTemplate (
  pluginDirectoryPath,
  template
) {
  const templateDirectory = join(__dirname, 'templates', template)
  if (await exists(templateDirectory)) {
    await ensureDir(pluginDirectoryPath)
    return copy(templateDirectory, pluginDirectoryPath)
  }
  return degit(template, {
    cache: true,
    force: true,
    verbose: true
  }).clone(pluginDirectoryPath)
}

async function interpolateConfigValues (pluginDirectoryPath, config) {
  const filePaths = await globby('**/*', {
    cwd: pluginDirectoryPath,
    dot: true
  })
  return Promise.all(
    filePaths.map(async function (filePath) {
      const absolutePath = join(pluginDirectoryPath, filePath)
      const buffer = await readFile(absolutePath)
      const fileContents = isUtf8(buffer)
        ? interpolate(buffer.toString(), config)
        : buffer
      return outputFile(absolutePath, fileContents)
    })
  )
}

function interpolate (string, data) {
  return mustache.render(string, data)
}
