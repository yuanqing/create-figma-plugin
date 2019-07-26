import degit from 'degit'
import { copy, ensureDir, exists, outputFile, readFile } from 'fs-extra'
import globby from 'globby'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import { join } from 'path'
import { promptForUserInput } from './prompt-for-user-input'
import { constants } from '@create-figma-plugin/common'

mustache.escape = function (text) {
  return text
}

export async function init (options, useDefault) {
  if (typeof options.name !== 'undefined') {
    await throwIfDirectoryExists(join(process.cwd(), options.name))
  }
  const config = useDefault
    ? createDefaultConfig(options)
    : await promptForUserInput(options)
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

function createDefaultConfig ({ name, template }) {
  const result = {
    name: constants.packageJson.defaultPluginName,
    template: 'default'
  }
  if (name) {
    result.name = name
  }
  if (template) {
    result.template = template
  }
  return result
}

const gitHubRepositoryRegex = /[\w-]+\/[\w-]+/

async function buildPluginDirectoryFromTemplate (
  pluginDirectoryPath,
  template
) {
  const templateDirectory = join(__dirname, 'templates', template)
  if (await exists(templateDirectory)) {
    await ensureDir(pluginDirectoryPath)
    return copy(templateDirectory, pluginDirectoryPath)
  }
  if (gitHubRepositoryRegex.test(template) === false) {
    return new Error('Invalid GitHub repository')
  }
  return degit(template).clone(pluginDirectoryPath)
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
