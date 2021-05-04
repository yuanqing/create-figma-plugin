import { log } from '@create-figma-plugin/common'
import { watch as chokidarWatch } from 'chokidar'
import { yellow } from 'kleur/colors'

import { BuildOptions } from '../types/build'
import { buildBundlesAsync } from '../utilities/build-bundles-async/build-bundles-async'
import { buildCssModulesTypingsAsync } from '../utilities/build-css-modules-typings-async'
import { buildManifestAsync } from '../utilities/build-manifest-async'
import { trackElapsedTime } from '../utilities/track-elapsed-time'
import { watchIgnoreRegex } from './watch-ignore-regex'

const cssRegex = /\.css$/
const packageJsonRegex = /^package\.json$/

export function watch(options: BuildOptions): void {
  const watcher = chokidarWatch(
    ['**/*.{css,js,json,jsx,ts,tsx}', 'package.json', 'tsconfig.json'],
    {
      ignored: function (path: string) {
        return watchIgnoreRegex.test(path) === true
      }
    }
  )
  watcher.on('ready', function (): void {
    log.info('Watching...')
  })
  watcher.on('change', async function (file: string): Promise<void> {
    log.info(`Changed ${yellow(file)}`)
    log.info('Building...')
    try {
      const elapsedTime = trackElapsedTime()
      if (packageJsonRegex.test(file) === true) {
        await buildManifestAsync(options.minify)
      } else {
        if (cssRegex.test(file) === true) {
          await buildCssModulesTypingsAsync()
        }
      }
      await buildBundlesAsync(options)
      log.success(`Built in ${yellow(elapsedTime())}`)
    } catch (error) {
      log.error(error.message)
    }
    log.info('Watching...')
  })
}
