import { log, readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'

export async function build (isDevelopment) {
  log.info('Building plugin...')
  const config = await readConfig()
  await buildBundle(config, isDevelopment)
  await buildManifest(config)
  log.success('Done')
}
