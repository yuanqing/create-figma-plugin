import { log } from '@create-figma-plugin/common'
import { yellow } from 'kleur/colors'

import { BuildOptions } from './types/build.js'
import { buildBundlesAsync } from './utilities/build-bundles-async/build-bundles-async.js'
import { buildCssModulesTypingsAsync } from './utilities/build-css-modules-typings-async.js'
import { buildManifestAsync } from './utilities/build-manifest-async.js'
import { trackElapsedTime } from './utilities/track-elapsed-time.js'
import { typeCheckAsync } from './utilities/type-check-async/type-check-async.js'

export async function buildAsync(options: BuildOptions): Promise<void> {
  const elapsedTime = trackElapsedTime()
  log.info('Building...')
  try {
    if (options.typecheck === true) {
      await buildCssModulesTypingsAsync() // This must occur before `typeCheckAsync`
      await typeCheckAsync(false)
      await Promise.all([
        buildBundlesAsync(options.minify),
        buildManifestAsync(options.minify)
      ])
    } else {
      await Promise.all([
        buildCssModulesTypingsAsync(),
        buildBundlesAsync(options.minify),
        buildManifestAsync(options.minify)
      ])
    }
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
  log.success(`Built in ${yellow(elapsedTime())}`)
}
