import { log } from '@create-figma-plugin/common'
import fs from 'fs-extra'
import { join } from 'path'

import { Settings } from './types/settings.js'
import { cloneFromTemplateAsync } from './utilities/clone-from-template-async.js'
import { installDependenciesAsync } from './utilities/install-dependencies-async.js'
import { interpolateValuesIntoFilesAsync } from './utilities/interpolate-values-into-files-async.js'
import { resolveLatestStableVersions } from './utilities/resolve-latest-stable-versions.js'
import { createDefaultSettings } from './utilities/settings/create-default-settings.js'
import { promptForUserInputAsync } from './utilities/settings/prompt-for-user-input-async.js'

export async function createFigmaPluginAsync(
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
    const versions = await resolveLatestStableVersions()
    await interpolateValuesIntoFilesAsync(pluginDirectoryPath, {
      ...settings,
      versions
    })
    log.info('Installing dependencies...')
    await installDependenciesAsync(pluginDirectoryPath)
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
  log.success('Done')
}

async function throwIfDirectoryExistsAsync(directory: string): Promise<void> {
  if ((await fs.pathExists(directory)) === true) {
    throw new Error(`Directory already exists: ${directory}`)
  }
}
