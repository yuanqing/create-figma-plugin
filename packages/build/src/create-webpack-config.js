import { join } from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'

export function createWebpackConfig (
  entryFilePath,
  outputConfig,
  isDevelopment
) {
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
