import { pathExists } from 'fs-extra'
import { join } from 'path'
import { log } from '@create-figma-plugin/common'
import { createDefaultConfig } from './config/create-default-config'
import { cloneFromTemplateAsync } from './clone-from-template-async'
import { installDependenciesAsync } from './install-dependencies-async'
import { interpolateValuesIntoFilesAsync } from './interpolate-values-into-files-async'
import { promptForUserInputAsync } from './config/prompt-for-user-input-async'

export async function createFigmaPluginAsync (options, useDefaults) {
  try {
    if (typeof options.name !== 'undefined') {
      await throwIfDirectoryExistsAsync(join(process.cwd(), options.name))
    }
    log.info('Scaffolding a new plugin...')
    const config = useDefaults
      ? createDefaultConfig(options)
      : await promptForUserInputAsync(options)
    const pluginDirectoryPath = join(process.cwd(), config.name)
    await throwIfDirectoryExistsAsync(pluginDirectoryPath)
    log.info('Cloning template...')
    await cloneFromTemplateAsync(pluginDirectoryPath, config.template)
    await interpolateValuesIntoFilesAsync(pluginDirectoryPath, config)
    log.info('Installing dependencies...')
    await installDependenciesAsync(pluginDirectoryPath)
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
  log.success('Done')
}

async function throwIfDirectoryExistsAsync (directory) {
  if ((await pathExists(directory)) === true) {
    throw new Error(`Directory already exists: ${directory}`)
  }
}
