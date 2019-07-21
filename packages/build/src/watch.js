const { constants } = require('@create-figma-plugin/common')
const chokidar = require('chokidar')
const build = require('./build')

function watch () {
  const watcher = chokidar.watch([constants.sourceGlobPattern, 'package.json'])
  async function handler () {
    await build(true)
  }
  watcher.on('ready', handler)
  watcher.on('change', handler)
  return Promise.resolve()
}

module.exports = watch
