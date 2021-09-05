import { log } from '@create-figma-plugin/common'
import fs from 'fs-extra'
import { join } from 'path'

import { copyPluginTemplateAsync } from './utilities/copy-plugin-template-async.js'
import { createSettings } from './utilities/create-settings.js'
import { installDependenciesAsync } from './utilities/install-dependencies-async.js'
import { interpolateValuesIntoFilesAsync } from './utilities/interpolate-values-into-files-async.js'
import { readPluginTemplateNamesAsync } from './utilities/read-template-names-async.js'
import { resolveLatestStableVersions } from './utilities/resolve-latest-stable-versions.js'

export async function createFigmaPluginAsync(options: {
  name?: string
  template?: string
}): Promise<void> {
  try {
    const settings = createSettings(options)

    const pluginDirectoryPath = join(process.cwd(), settings.name)
    if ((await fs.pathExists(pluginDirectoryPath)) === true) {
      throw new Error(`Directory already exists: ${pluginDirectoryPath}`)
    }
    const templateNames = await readPluginTemplateNamesAsync()
    if (templateNames.indexOf(settings.template) === -1) {
      throw new Error(`Template must be one of "${templateNames.join('", "')}"`)
    }

    log.info(`Copying "${settings.template}" template...`)
    await copyPluginTemplateAsync(pluginDirectoryPath, settings.template)

    log.info('Installing dependencies...')
    const versions = await resolveLatestStableVersions()
    await interpolateValuesIntoFilesAsync(pluginDirectoryPath, {
      ...settings,
      versions
    })
    await installDependenciesAsync(pluginDirectoryPath)
  } catch (error: any) {
    log.error(error.message)
    process.exit(1)
  }
  log.success('Done')
}
