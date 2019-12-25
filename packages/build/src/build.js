import { log, readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'

export async function build (isDevelopment, exitOnError) {
  log.info('Building plugin...')
  const config = await readConfig()
  try {
    await buildBundle(config, isDevelopment)
    await buildManifest(config)
  } catch (error) {
    log.error(error)
    if (exitOnError === true) {
      process.exit(1)
    }
    return
  }
  log.success('Done')
}
