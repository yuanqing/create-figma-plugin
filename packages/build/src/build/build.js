import { readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'

export async function build (isDevelopment) {
  const config = await readConfig()
  await buildBundle(config, isDevelopment)
  return buildManifest(config)
}
