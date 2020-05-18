import { constants, log } from '@create-figma-plugin/common'
import * as chokidar from 'chokidar'

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

export function watch(): void {
  const watcher = chokidar.watch('.', {
    ignored: function (path: string) {
      return ignoreRegex.test(path)
    }
  })
  async function onChangeAsync() {
    await buildAsync(true, false)
    log.info('Watching...')
  }
  watcher.on('ready', onChangeAsync)
  watcher.on('change', async function (file: string) {
    log.info(`Changed: ${file}`)
    await onChangeAsync()
  })
}
