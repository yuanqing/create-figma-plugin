const { resolve } = require('path')

function webpackFinal (config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
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
    ],
    include: resolve(__dirname, '..', 'src')
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader'
    }
  })
  config.module.rules.push({
    test: /\.stories\.tsx$/,
    use: [{ loader: '@storybook/source-loader' }],
    include: resolve(__dirname, '..', 'src'),
    enforce: 'pre'
  })
  config.resolve.extensions.push('.ts', '.tsx');
  return config
}

module.exports = {
  webpackFinal,
  addons: [
    '@storybook/addon-storysource',
  ]
}
