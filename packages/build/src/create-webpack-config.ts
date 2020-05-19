import { constants } from '@create-figma-plugin/common'
import { join, resolve } from 'path'
import * as TerserPlugin from 'terser-webpack-plugin'
import * as webpack from 'webpack'

const babelLoaderPlugins = [
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

export function createWebpackConfig(
  entry: webpack.Entry,
  isDevelopment: boolean
): webpack.Configuration {
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
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: babelLoaderPlugins
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
              plugins: babelLoaderPlugins
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
    resolve: {
      modules: [
        join(process.cwd(), constants.src.directory),
        join(process.cwd(), 'node_modules'),
        resolve(process.cwd(), '..', '..', 'node_modules'), // Lerna monorepo
        process.cwd(),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    devtool: isDevelopment ? 'inline-cheap-module-source-map' : false,
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
