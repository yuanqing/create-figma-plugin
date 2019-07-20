const { join } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { buildDirectoryName, buildFileName } = require('./constants')

function createWebpackConfig (entryFilePath, isDevelopment) {
  const mode = isDevelopment ? 'development' : 'production'
  return {
    mode,
    entry: entryFilePath,
    output: {
      path: join(process.cwd(), buildDirectoryName),
      filename: buildFileName
    },
    devtool: isDevelopment ? 'source-map' : 'none',
    target: 'node',
    stats: 'errors-only',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    }
  }
}

module.exports = createWebpackConfig
