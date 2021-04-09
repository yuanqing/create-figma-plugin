import { log, readConfigAsync } from '@create-figma-plugin/common'
import { gray } from 'kleur/colors'

import { buildBundlesAsync } from './build-bundles-async'
import { buildCssModulesTypings } from './build-css-modules-typings'
import { buildManifestAsync } from './build-manifest-async'

export async function buildAsync(
  minify: boolean,
  exitOnError: boolean
): Promise<void> {
  const time = process.hrtime()
  log.info('Building...')
  const config = await readConfigAsync()
  try {
    await buildCssModulesTypings()
    await buildManifestAsync(config, minify)
    await buildBundlesAsync(config, minify)
  } catch (error) {
    log.error(error)
    if (exitOnError === true) {
      process.exit(1)
    }
  }
  const elapsedTime = process.hrtime(time)
  log.success(`Done ${gray(formatElapsedTime(elapsedTime))}`)
}

function formatElapsedTime(time: [number, number]) {
  if (time[0] === 0) {
    return `${(time[1] / 1e6).toFixed(0)}ms`
  }
  return `${(time[0] + time[1] / 1e9).toFixed(2)}s`
}
