import { log } from '@create-figma-plugin/common'
import { watch } from 'chokidar'
import { yellow } from 'kleur/colors'

import { BuildOptions } from '../types/build.js'
import { buildBundlesAsync } from '../utilities/build-bundles-async/build-bundles-async.js'
import { buildCssModulesTypingsAsync } from '../utilities/build-css-modules-typings-async.js'
import { buildManifestAsync } from '../utilities/build-manifest-async.js'
import { trackElapsedTime } from '../utilities/track-elapsed-time.js'
import { typeCheckAsync } from '../utilities/type-check-async/type-check-async.js'
import { watchIgnoreRegex } from './watch-ignore-regex.js'

const cssRegex = /\.css$/
const packageJsonRegex = /^package\.json$/

export async function watchAsync(options: BuildOptions): Promise<void> {
  const { minify, uiConfigFilePath, mainConfigFilePath, typecheck } = options
  const watcher = watch(
    ['**/*.{css,js,json,jsx,ts,tsx}', 'package.json', 'tsconfig.json'],
    {
      ignored: function (path: string): boolean {
        return watchIgnoreRegex.test(path) === true
      }
    }
  )
  watcher.on('ready', function (): void {
    log.info('Watching...')
  })
  watcher.on('change', async function (file: string): Promise<void> {
    const elapsedTime = trackElapsedTime()
    log.info(`Changed ${yellow(file)}`)
    const promises: Array<Promise<void>> = []
    if (packageJsonRegex.test(file) === true) {
      promises.push(buildManifestAsync(minify))
    } else {
      if (cssRegex.test(file) === true) {
        promises.push(buildCssModulesTypingsAsync())
      }
    }
    promises.push(
      buildBundlesAsync({ mainConfigFilePath, minify, uiConfigFilePath })
    )
    await Promise.all(promises)
    log.success(`Built in ${yellow(elapsedTime())}`)
  })

  if (typecheck === true) {
    await typeCheckAsync(true)
  }
}
