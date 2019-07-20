const chokidar = require('chokidar')
const build = require('./build')
const { sourceGlobPattern } = require('./constants')

function watch () {
  const watcher = chokidar.watch([sourceGlobPattern, 'package.json'])
  async function handler () {
    await build(true)
  }
  watcher.on('ready', handler)
  watcher.on('change', handler)
  return Promise.resolve()
}

module.exports = watch
