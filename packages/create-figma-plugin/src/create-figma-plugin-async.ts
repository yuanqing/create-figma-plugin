import { constants, log } from '@create-figma-plugin/common'
import fs from 'fs-extra'
import { paramCase } from 'param-case'
import { basename, join } from 'path'

import { copyTemplateAsync } from './utilities/copy-template-async.js'
import { createPluginName } from './utilities/create-plugin-name.js'
import { installDependenciesAsync } from './utilities/install-dependencies-async.js'
import { interpolateValuesIntoFilesAsync } from './utilities/interpolate-values-into-files-async.js'
import { resolveCreateFigmaPluginLatestStableVersions } from './utilities/resolve-create-figma-plugin-latest-stable-versions.js'
import { resolveDirectoryPathAsync } from './utilities/resolve-directory-path-async.js'
import { resolveTemplateNameAsync } from './utilities/resolve-template-name-async.js'

export async function createFigmaPluginAsync(options: {
  name?: string
  template?: string
}): Promise<void> {
  try {
    if (typeof options.name !== 'undefined') {
      const directoryPath = join(process.cwd(), options.name)
      if ((await fs.pathExists(directoryPath)) === true) {
        throw new Error(`Directory already exists: ./${options.name}`)
      }
    }
    const templateName = await resolveTemplateNameAsync(options.template)
    const pluginDirectoryName =
      typeof options.name !== 'undefined'
        ? options.name
        : basename(templateName)
    const pluginDirectoryPath = await resolveDirectoryPathAsync(
      pluginDirectoryName
    )
    log.info(`Copying "${templateName}" template...`)
    await copyTemplateAsync(templateName, pluginDirectoryPath)
    log.info('Resolving package versions...')
    const versions = await resolveCreateFigmaPluginLatestStableVersions()
    await interpolateValuesIntoFilesAsync(pluginDirectoryPath, {
      id: paramCase(pluginDirectoryName),
      name: createPluginName(pluginDirectoryName),
      versions: {
        createFigmaPlugin: versions,
        figma: {
          pluginTypings: constants.packageJson.versions.pluginTypings,
          widgetTypings: constants.packageJson.versions.widgetTypings
        }
      }
    })
    log.info('Installing dependencies...')
    await installDependenciesAsync(pluginDirectoryPath)
    log.success('Done')
  } catch (error: any) {
    log.error(error.message)
    process.exit(1)
  }
}
