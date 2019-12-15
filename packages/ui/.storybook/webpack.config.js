const { resolve } = require('path')

module.exports = function ({ config }) {
  config.module.rules = config.module.rules.filter(function ({ test }) {
    return test.toString() !== '/\\.scss$/'
  })
  config.module.rules.push({
    test: /\.scss$/,
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
      },
      {
        loader: 'sass-loader'
      }
    ],
    include: resolve(__dirname, '..', 'src')
  })
  config.module.rules.push({
    test: /\.stories\.js$/,
    use: [{ loader: '@storybook/source-loader' }],
    include: resolve(__dirname, '..', 'src'),
    enforce: 'pre'
  })
  return config
}
