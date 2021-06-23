import { log } from '@create-figma-plugin/common'

import { BuildOptions } from './types/build.js'
import { buildBundlesAsync } from './utilities/build-bundles-async/build-bundles-async.js'
import { buildCssModulesTypingsAsync } from './utilities/build-css-modules-typings-async.js'
import { buildManifestAsync } from './utilities/build-manifest-async.js'
import { trackElapsedTime } from './utilities/track-elapsed-time.js'
import { typeCheckAsync } from './utilities/type-check-async/type-check-async.js'

export async function buildAsync(
  options: BuildOptions & { clearPreviousLine: boolean }
): Promise<void> {
  const { minify, typecheck, clearPreviousLine } = options
  try {
    if (typecheck === true) {
      const getTypeCheckElapsedTime = trackElapsedTime()
      await buildCssModulesTypingsAsync() // This must occur before `typeCheckAsync`
      log.info('Type checking...')
      await typeCheckAsync(false)
      const typeCheckElapsedTime = getTypeCheckElapsedTime()
      log.success(`Type checked in ${typeCheckElapsedTime}`, {
        clearPreviousLine
      })
      log.info('Building...')
      const getBuildElapsedTime = trackElapsedTime()
      await Promise.all([buildBundlesAsync(minify), buildManifestAsync(minify)])
      const buildElapsedTime = getBuildElapsedTime()
      log.success(`Built in ${buildElapsedTime}`, { clearPreviousLine })
    } else {
      log.info('Building...')
      const getBuildElapsedTime = trackElapsedTime()
      await Promise.all([
        buildCssModulesTypingsAsync(),
        buildBundlesAsync(minify),
        buildManifestAsync(minify)
      ])
      const buildElapsedTime = getBuildElapsedTime()
      log.success(`Built in ${buildElapsedTime}`, { clearPreviousLine })
    }
  } catch (error) {
    log.error(error.message)
    process.exit(1)
  }
}
