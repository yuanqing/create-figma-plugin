import { log, readConfigAsync } from '@create-figma-plugin/common'

import { buildBundleAsync } from './build-bundle-async'
import { buildManifestAsync } from './build-manifest-async'

export async function buildAsync(
  isDevelopment: boolean,
  exitOnError: boolean
): Promise<void> {
  log.info('Building plugin...')
  const config = await readConfigAsync()
  try {
    await buildBundleAsync(config, isDevelopment)
    await buildManifestAsync(config)
  } catch (error) {
    log.error(error)
    if (exitOnError === true) {
      process.exit(1)
    }
    return
  }
  log.success('Done')
}
