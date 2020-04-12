import { exists } from 'fs-extra'
import { join } from 'path'
import { constants, log } from '@create-figma-plugin/common'
import { cloneFromTemplateAsync } from './clone-from-template-async'
import { installDependenciesAsync } from './install-dependencies-async'
import { interpolateValuesIntoFilesAsync } from './interpolate-values-into-files-async'
import { promptForUserInputAsync } from './prompt-for-user-input-async'

export async function createFigmaPluginAsync (options, useDefault) {
  if (typeof options.name !== 'undefined') {
    await throwIfDirectoryExistsAsync(join(process.cwd(), options.name))
  }
  log.info('Scaffolding a new plugin...')
  const config = useDefault
    ? createDefaultConfig(options)
    : await promptForUserInputAsync(options)
  const pluginDirectoryPath = join(process.cwd(), config.name)
  await throwIfDirectoryExistsAsync(pluginDirectoryPath)
  log.info('Cloning template...')
  await cloneFromTemplateAsync(pluginDirectoryPath, config.template)
  await interpolateValuesIntoFilesAsync(pluginDirectoryPath, config)
  log.info('Installing dependencies...')
  await installDependenciesAsync(pluginDirectoryPath)
  log.success('Done')
}

async function throwIfDirectoryExistsAsync (directory) {
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
