const webpack = require('webpack')
const buildWebpackEntryFile = require('./build-webpack-entry-file')
const createWebpackConfig = require('./create-webpack-config')

async function buildPlugin (config, isDevelopment) {
  const entryFilePath = await buildWebpackEntryFile(config)
  const webpackConfig = createWebpackConfig(entryFilePath, isDevelopment)
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (stats.hasErrors()) {
        reject(stats.toJson().errors.join('\n'))
        return
      }
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

module.exports = buildPlugin
