import { log } from '@create-figma-plugin/common'
import { yellow } from 'kleur/colors'

import { buildBundlesAsync } from './build-bundles-async'
import { buildCssModulesTypingsAsync } from './build-css-modules-typings-async'
import { buildManifestAsync } from './build-manifest-async'
import { trackElapsedTime } from './track-elapsed-time'
import type { BuildOptions } from './types/build'

export async function buildAsync(options: BuildOptions): Promise<void> {
  const elapsedTime = trackElapsedTime()
  log.info('Building...')
  try {
    await buildCssModulesTypingsAsync()
    await Promise.all([
      buildManifestAsync(options.minify),
      buildBundlesAsync(options)
    ])
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
  log.success(`Built in ${yellow(elapsedTime())}`)
}
