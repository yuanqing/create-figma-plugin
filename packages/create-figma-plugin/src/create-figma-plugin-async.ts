import { log } from '@create-figma-plugin/common'
import fs from 'fs-extra'
import { join } from 'path'

import { copyPluginTemplateAsync } from './utilities/copy-plugin-template-async.js'
import { installDependenciesAsync } from './utilities/install-dependencies-async.js'
import { interpolateValuesIntoFilesAsync } from './utilities/interpolate-values-into-files-async.js'
import { readPluginTemplateNamesAsync } from './utilities/read-template-names-async.js'
import { resolveLatestStableVersions } from './utilities/resolve-latest-stable-versions.js'
import { createDefaultSettings } from './utilities/settings/create-default-settings.js'
import { promptForUserInputAsync } from './utilities/settings/prompt-for-user-input-async.js'

export async function createFigmaPluginAsync(options: {
  name?: string
  template?: string
  useDefaults: boolean
}): Promise<void> {
  const { name, template, useDefaults } = options
  try {
    if (typeof name !== 'undefined') {
      await throwIfDirectoryExistsAsync(join(process.cwd(), name))
    }
    if (typeof template !== 'undefined') {
      const templateNames = await readPluginTemplateNamesAsync()
      if (templateNames.indexOf(template) === -1) {
        throw new Error(
          `Template must be one of "${templateNames.join('", "')}"`
        )
      }
    }
    log.info('Scaffolding a new plugin...')
    const settings = useDefaults
      ? createDefaultSettings({ name, template })
      : await promptForUserInputAsync({ name, template })
    const pluginDirectoryPath = join(process.cwd(), settings.name)
    await throwIfDirectoryExistsAsync(pluginDirectoryPath)
    log.info(`Copying "${settings.template}" template...`)
    await copyPluginTemplateAsync(pluginDirectoryPath, settings.template)
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
