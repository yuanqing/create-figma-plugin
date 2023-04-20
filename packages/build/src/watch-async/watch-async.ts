import { constants, log } from '@create-figma-plugin/common'
import { watch } from 'chokidar'
import { yellow } from 'kleur/colors'

import { BuildOptions } from '../types/build.js'
import { buildBundlesAsync } from '../utilities/build-bundles-async/build-bundles-async.js'
import { buildCssModulesTypingsAsync } from '../utilities/build-css-modules-typings-async.js'
import { buildManifestAsync } from '../utilities/build-manifest-async.js'
import { trackElapsedTime } from '../utilities/track-elapsed-time.js'
import { typeCheckWatch } from '../utilities/type-check/type-check-watch.js'
import { watchIgnoreRegex } from './watch-ignore-regex.js'

const cssRegex = /\.css$/
const packageJsonRegex = /^package\.json$/

export async function watchAsync(options: BuildOptions): Promise<void> {
  const { minify, typecheck } = options
  let endTypeCheckWatch: () => void
  if (typecheck === true) {
    endTypeCheckWatch = typeCheckWatch()
  }
  const watcher = watch(
    [
      '**/*.{css,js,json,jsx,ts,tsx}',
      constants.build.mainConfigGlobPattern,
      constants.build.manifestConfigGlobPattern,
      constants.build.uiConfigGlobPattern,
      'package.json',
      'tsconfig.json'
    ],
    {
      ignored: function (path: string): boolean {
        return watchIgnoreRegex.test(path) === true
      }
    }
  )
  if (typecheck === false) {
    watcher.on('ready', function (): void {
      log.info('Watching...')
    })
  }
  watcher.on('change', async function (file: string): Promise<void> {
    try {
      if (typecheck === true && file.indexOf('tsconfig.json') !== -1) {
        endTypeCheckWatch()
      }
      log.clearViewport()
      const getElapsedTime = trackElapsedTime()
      log.info(`Changed ${yellow(file)}`)
      const promises: Array<Promise<void>> = []
      if (packageJsonRegex.test(file) === true) {
        promises.push(buildManifestAsync(minify))
      } else {
        if (cssRegex.test(file) === true) {
          promises.push(buildCssModulesTypingsAsync())
        }
      }
      promises.push(buildBundlesAsync(minify))
      await Promise.all(promises)
      log.success(`Built in ${getElapsedTime()}`)
      if (typecheck === false) {
        log.info('Watching...')
        return
      }
      if (file.indexOf('tsconfig.json') !== -1) {
        // Restart the type-check watcher program
        endTypeCheckWatch = typeCheckWatch()
      }
    } catch (error: any) {
      log.error(error.message)
    }
  })
}
