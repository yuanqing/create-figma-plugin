const { join } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { buildDirectoryName } = require('./constants')

function createWebpackConfig (entryFilePath, buildFileName, isDevelopment) {
  const mode = isDevelopment ? 'development' : 'production'
  return {
    mode,
    entry: entryFilePath,
    output: {
      path: join(process.cwd(), buildDirectoryName),
      filename: buildFileName
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', 'babel-preset-preact']
            }
          }
        }
      ]
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
