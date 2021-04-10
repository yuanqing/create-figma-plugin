import { log } from '@create-figma-plugin/common'
import { watch as chokidarWatch } from 'chokidar'
import { yellow } from 'kleur/colors'

import { buildBundlesAsync } from './build-bundles-async'
import { buildCssModulesTypingsAsync } from './build-css-modules-typings-async'
import { buildManifestAsync } from './build-manifest-async'
import { trackElapsedTime } from './track-elapsed-time'
import { BuildOptions } from './types/build'

const cssRegex = /.css$/
const ignoreRegex = /.css.d.ts$/

export function watch(options: BuildOptions): void {
  const globs = ['package.json', 'src/**/*.{css,js,jsx,ts,tsx}']
  const watcher = chokidarWatch(globs, {
    ignored: function (path: string) {
      return ignoreRegex.test(path) === true
    }
  })
  watcher.on('ready', function () {
    log.info('Watching...')
  })
  watcher.on('change', async function (file: string) {
    log.info(`Changed ${yellow(file)}`)
    log.info('Building...')
    try {
      const elapsedTime = trackElapsedTime()
      if (file === 'package.json') {
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
