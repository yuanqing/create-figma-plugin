import { log } from '@create-figma-plugin/common'
import { watch as chokidarWatch } from 'chokidar'
import { gray, yellow } from 'kleur/colors'

import { buildBundlesAsync } from './build-bundles-async'
import { buildCssModulesTypingsAsync } from './build-css-modules-typings-async'
import { buildManifestAsync } from './build-manifest-async'
import { trackElapsedTime } from './track-elapsed-time'

const cssRegex = /.css$/
const ignoreRegex = /.css.d.ts$/

export function watch(minify: boolean): void {
  const globs = ['package.json', 'src/**/*.{css,js,jsx,ts,tsx}']
  const watcher = chokidarWatch(globs, {
    ignored: function (path: string) {
      return ignoreRegex.test(path) === true
    }
  })
  watcher.on('ready', function () {
    log.info('Watching')
  })
  watcher.on('change', async function (file: string) {
    log.info(`Changed ${yellow(file)}`)
    const elapsedTime = trackElapsedTime()
    if (file === 'package.json') {
      await buildManifestAsync(minify)
    } else {
      if (cssRegex.test(file) === true) {
        await buildCssModulesTypingsAsync()
      }
    }
    await buildBundlesAsync(minify)
    log.success(`Built ${gray(elapsedTime())}`)
    log.info('Watching')
  })
}
