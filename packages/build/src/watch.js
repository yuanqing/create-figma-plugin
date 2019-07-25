import chokidar from 'chokidar'
import { constants } from '@create-figma-plugin/common'
import { build } from './build'

export function watch () {
  const watcher = chokidar.watch([constants.src.globPattern, 'package.json'])
  async function handler () {
    await build(true)
  }
  watcher.on('ready', handler)
  watcher.on('change', handler)
  return Promise.resolve()
}
