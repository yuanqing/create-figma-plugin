import { join, resolve } from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'

export function createWebpackConfig (entry, isDevelopment) {
  const mode = isDevelopment ? 'development' : 'production'
  return {
    mode,
    entry,
    output: {
      filename: '[name].js',
      path: join(process.cwd(), constants.build.directoryName)
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules\/(?!@create-figma-plugin)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                [
                  '@babel/plugin-transform-react-jsx',
                  {
                    pragma: 'h',
                    pragmaFrag: 'Fragment'
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'styleTag'
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      modules: [
        join(process.cwd(), constants.src.directory),
        join(process.cwd(), 'node_modules'),
        resolve(process.cwd(), '..', '..', 'node_modules'), // Lerna monorepo
        process.cwd(),
        'node_modules'
      ],
      extensions: ['.js', '.json']
    },
    devtool: isDevelopment ? 'inline-cheap-source-map' : 'none',
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
          },
          extractComments: false
        })
      ]
    }
  }
}
