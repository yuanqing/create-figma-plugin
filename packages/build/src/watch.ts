import * as chokidar from 'chokidar'
import { constants, log } from '@create-figma-plugin/common'
import { buildAsync } from './build-async'

const ignoreRegex = new RegExp(
  [
    '(^|\\/)', // beginning of string or '/'
    '\\.', // '.'
    '[^.]+', // one or more characters that isn't '.'
    `|${constants.build.directoryName}`,
    `|${constants.build.manifestFilePath}`,
    '|node_modules'
  ].join('')
)

export function watch () {
  const watcher = chokidar.watch('.', {
    ignored: function (path) {
      return ignoreRegex.test(path)
    }
  })
  async function runAsync () {
    await buildAsync(true, false)
    log.info('Watching...')
  }
  watcher.on('ready', runAsync)
  watcher.on('change', async function (file) {
    log.info(`Changed: ${file}`)
    await runAsync()
  })
}
