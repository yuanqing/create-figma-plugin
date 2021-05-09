import { log } from '@create-figma-plugin/common'
import { yellow } from 'kleur/colors'

import { BuildOptions } from './types/build.js'
import { buildBundlesAsync } from './utilities/build-bundles-async/build-bundles-async.js'
import { buildCssModulesTypingsAsync } from './utilities/build-css-modules-typings-async.js'
import { buildManifestAsync } from './utilities/build-manifest-async.js'
import { trackElapsedTime } from './utilities/track-elapsed-time.js'

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
