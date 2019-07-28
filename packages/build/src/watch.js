import chokidar from 'chokidar'
import { constants, log } from '@create-figma-plugin/common'
import { build } from '../build'

/* eslint-disable */
// prettier-ignore
const ignoreRegex = new RegExp([
  '(^|\\/)', // beginning of string or '/'
  '\\.',     // '.'
  '[^.]+',   // one or more characters that isn't '.'
  `|${constants.build.directoryName}`,
  `|${constants.build.manifestFilePath}`,
  '|node_modules'
].join(''))
/* eslint-enable */

export function watch () {
  const watcher = chokidar.watch('.', {
    ignored: function (path) {
      return ignoreRegex.test(path)
    }
  })
  async function run () {
    await build(true)
    log.info('Watching...')
  }
  watcher.on('ready', run)
  watcher.on('change', async function (file) {
    log.info(`Changed: ${file}`)
    await run()
  })
}
