import chokidar from 'chokidar'
import { constants } from '@create-figma-plugin/common'
import { build } from '../build/build'

// prettier-ignore
const ignoreRegex = new RegExp([
  '(^|\\/)', // beginning of string or '/'
  '\\.',     // '.'
  '[^.]+',   // one or more characters that isn't '.'
  `|${constants.build.directoryName}`,
  `|${constants.build.manifestFilePath}`,
  '|node_modules'
].join(''))

export function watch (onBuildStart, onBuildEnd, onChange) {
  const watcher = chokidar.watch('.', {
    ignored: function (path) {
      return ignoreRegex.test(path)
    }
  })
  async function run () {
    onBuildStart()
    await build(true)
    onBuildEnd()
  }
  watcher.on('ready', run)
  watcher.on('change', async function (file) {
    onChange(file)
    await run()
  })
}
