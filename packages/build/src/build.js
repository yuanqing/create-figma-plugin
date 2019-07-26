import { readConfig } from '@create-figma-plugin/common'
import { buildBundle } from './build-bundle'
import { buildManifest } from './build-manifest'
import { watch } from './watch'

export async function build (isDevelopment, isWatch) {
  if (isWatch) {
    return watch()
  }
  const config = await readConfig()
  await buildBundle(config, isDevelopment)
  return buildManifest(config)
}
