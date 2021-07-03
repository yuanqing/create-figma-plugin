import { log } from '@create-figma-plugin/common'
import fs from 'fs-extra'
import { join, resolve } from 'path'

import { copyTemplateAsync } from './utilities/copy-template-async.js'
import { installDependenciesAsync } from './utilities/install-dependencies-async.js'
import { interpolateValuesIntoFilesAsync } from './utilities/interpolate-values-into-files-async.js'
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
      const templateDirectory = resolve(
        __dirname,
        '..',
        'plugin-templates',
        template
      )
      if ((await fs.pathExists(templateDirectory)) === false) {
        throw new Error(`Invalid template: ${template}`)
      }
    }
    log.info('Scaffolding a new plugin...')
    const settings = useDefaults
      ? createDefaultSettings({ name, template })
      : await promptForUserInputAsync({ name, template })
    const pluginDirectoryPath = join(process.cwd(), settings.name)
    await throwIfDirectoryExistsAsync(pluginDirectoryPath)
    log.info('Copying template...')
    await copyTemplateAsync(pluginDirectoryPath, settings.template)
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
