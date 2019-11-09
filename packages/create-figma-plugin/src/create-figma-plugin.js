import { exists } from 'fs-extra'
import { join } from 'path'
import { constants, log } from '@create-figma-plugin/common'
import { cloneFromTemplate } from './clone-from-template'
import { installDependencies } from './install-dependencies'
import { interpolateValuesIntoFiles } from './interpolate-values-into-files'
import { promptForUserInput } from './prompt-for-user-input'

export async function createFigmaPlugin (options, useDefault) {
  if (typeof options.name !== 'undefined') {
    await throwIfDirectoryExists(join(process.cwd(), options.name))
  }
  log.info('Scaffolding a new plugin...')
  const config = useDefault
    ? createDefaultConfig(options)
    : await promptForUserInput(options)
  const pluginDirectoryPath = join(process.cwd(), config.name)
  await throwIfDirectoryExists(pluginDirectoryPath)
  log.info('Cloning template...')
  await cloneFromTemplate(pluginDirectoryPath, config.template)
  await interpolateValuesIntoFiles(pluginDirectoryPath, config)
  log.info('Installing dependencies...')
  await installDependencies(pluginDirectoryPath)
  log.success('Done')
}

async function throwIfDirectoryExists (directory) {
  if ((await exists(directory)) === true) {
    return Promise.reject(new Error(`Directory already exists: ${directory}`))
  }
}

function createDefaultConfig ({ name, template }) {
  const result = {
    name: constants.packageJson.defaultPluginName,
    template: 'default'
  }
  if (typeof name !== 'undefined') {
    result.name = name
  }
  if (typeof template !== 'undefined') {
    result.template = template
  }
  return result
}
