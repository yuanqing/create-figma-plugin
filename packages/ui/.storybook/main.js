const { resolve } = require('path')

function webpackFinal (config) {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      }
    ],
    include: resolve(__dirname, '..', 'src')
  })
  return config
}

module.exports = {
  webpackFinal,
  addons: [
    '@storybook/addon-storysource',
  ]
}
