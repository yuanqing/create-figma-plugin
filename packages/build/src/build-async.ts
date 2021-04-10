import { log } from '@create-figma-plugin/common'
import { gray } from 'kleur/colors'

import { buildBundlesAsync } from './build-bundles-async'
import { buildCssModulesTypingsAsync } from './build-css-modules-typings-async'
import { buildManifestAsync } from './build-manifest-async'
import { trackElapsedTime } from './track-elapsed-time'

export async function buildAsync(minify: boolean): Promise<void> {
  const elapsedTime = trackElapsedTime()
  log.info('Building')
  await Promise.all([
    buildCssModulesTypingsAsync(),
    buildManifestAsync(minify),
    buildBundlesAsync(minify)
  ])
  log.success(`Built ${gray(elapsedTime())}`)
}
