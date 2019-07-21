const { constants } = require('@create-figma-plugin/common')
const { join } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

function createWebpackConfig (entryFilePath, outputConfig, isDevelopment) {
  const mode = isDevelopment ? 'development' : 'production'
  return {
    mode,
    entry: entryFilePath,
    output: {
      ...outputConfig,
      path: join(process.cwd(), constants.buildDirectoryName)
    },
    devtool: isDevelopment ? 'inline-cheap-source-map' : 'none',
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
