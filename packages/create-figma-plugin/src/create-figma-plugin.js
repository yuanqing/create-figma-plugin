import { exists } from 'fs-extra'
import { join } from 'path'
import { constants } from '@create-figma-plugin/common'
import { cloneFromTemplate } from './clone-from-template'
import { installDependencies } from './install-dependencies'
import { interpolateValuesIntoFiles } from './interpolate-values-into-files'
import { promptForUserInput } from './prompt-for-user-input'

export async function createFigmaPlugin (options, useDefault) {
  if (typeof options.name !== 'undefined') {
    await throwIfDirectoryExists(join(process.cwd(), options.name))
  }
  const config = useDefault
    ? createDefaultConfig(options)
    : await promptForUserInput(options)
  const pluginDirectoryPath = join(process.cwd(), config.name)
  await throwIfDirectoryExists(pluginDirectoryPath)
  await cloneFromTemplate(pluginDirectoryPath, config.template)
  await interpolateValuesIntoFiles(pluginDirectoryPath, config)
  await installDependencies(pluginDirectoryPath)
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
