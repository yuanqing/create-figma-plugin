import { constants } from '@create-figma-plugin/common'
import { join, resolve } from 'path'
import * as TerserPlugin from 'terser-webpack-plugin'
import * as webpack from 'webpack'

const babelLoader = {
  loader: 'babel-loader',
  options: {
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-transform-template-literals',
        {
          loose: true
        }
      ],
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

export function createWebpackConfig(
  entry: webpack.Entry,
  isDevelopment: boolean
): webpack.Configuration {
  const mode = isDevelopment ? 'development' : 'production'
  return {
    devtool: isDevelopment ? 'inline-cheap-module-source-map' : false,
    entry,
    mode,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: babelLoader
        },
        {
          test: /\.tsx?$/,
          use: [
            babelLoader,
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  module: 'es2020',
                  moduleResolution: 'node',
                  target: 'es2016'
                }
              }
            }
          ]
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
              loader: '@teamsupercell/typings-for-css-modules-loader'
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
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    },
    output: {
      filename: '[name].js',
      path: join(process.cwd(), constants.build.directoryName)
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      modules: [
        join(process.cwd(), constants.src.directory),
        join(process.cwd(), 'node_modules'),
        resolve(process.cwd(), '..', '..', 'node_modules'), // Lerna monorepo
        process.cwd(),
        'node_modules'
      ]
    },
    stats: 'errors-only'
  }
}
