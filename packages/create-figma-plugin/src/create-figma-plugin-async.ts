import { pathExists } from 'fs-extra'
import { join } from 'path'
import { log } from '@create-figma-plugin/common'
import { createDefaultSettings } from './settings/create-default-settings'
import { cloneFromTemplateAsync } from './clone-from-template-async'
import { installDependenciesAsync } from './install-dependencies-async'
import { interpolateValuesIntoFilesAsync } from './interpolate-values-into-files-async'
import { promptForUserInputAsync } from './settings/prompt-for-user-input-async'
import { Settings } from './types/settings'

export async function createFigmaPluginAsync (
  options: Settings,
  useDefaults: boolean
): Promise<void> {
  try {
    if (typeof options.name !== 'undefined') {
      await throwIfDirectoryExistsAsync(join(process.cwd(), options.name))
    }
    log.info('Scaffolding a new plugin...')
    const settings = useDefaults
      ? createDefaultSettings(options)
      : await promptForUserInputAsync(options)
    const pluginDirectoryPath = join(process.cwd(), settings.name)
    await throwIfDirectoryExistsAsync(pluginDirectoryPath)
    log.info('Cloning template...')
    await cloneFromTemplateAsync(pluginDirectoryPath, settings.template)
    await interpolateValuesIntoFilesAsync(pluginDirectoryPath, settings)
    log.info('Installing dependencies...')
    await installDependenciesAsync(pluginDirectoryPath)
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
  log.success('Done')
}

async function throwIfDirectoryExistsAsync (directory: string): Promise<void> {
  if ((await pathExists(directory)) === true) {
    throw new Error(`Directory already exists: ${directory}`)
  }
}
