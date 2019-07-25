import degit from 'degit'
import { copy, ensureDir, exists, outputFile, readFile } from 'fs-extra'
import globby from 'globby'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import { join } from 'path'
import { promptForUserInput } from './prompt-for-user-input'

export async function init (name, config) {
  const pluginDirectoryPath = join(process.cwd(), name)
  if (await exists(pluginDirectoryPath)) {
    return Promise.reject(
      new Error(`Directory already exists: ${pluginDirectoryPath}`)
    )
  }
  if (typeof config === 'undefined') {
    config = await promptForUserInput(name)
  }
  await buildPluginDirectoryFromTemplate(pluginDirectoryPath, config.template)
  return interpolateConfigValues(pluginDirectoryPath, {
    ...config,
    name
  })
}

async function buildPluginDirectoryFromTemplate (
  pluginDirectoryPath,
  template
) {
  if (typeof template === 'undefined') {
    const templateDirectory = join(__dirname, 'template')
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

mustache.escape = function (text) {
  return text
}
function interpolate (string, data) {
  return mustache.render(string, data)
}
