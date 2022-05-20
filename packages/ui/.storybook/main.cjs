const baseCssRegex = /css\/(?:base|theme)\.css$/

function webpackFinal(config) {
  const index = config.module.rules.findIndex(function (rule) {
    return rule.test.toString() === '/\\.css$/'
  })
  if (index === -1) {
    throw new Error(
      'Module rule for `.css` files not found in Storybook webpack config'
    )
  }
  config.module.rules[index] = {
    exclude: baseCssRegex,
    sideEffects: true,
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 0,
          modules: true
        }
      }
    ]
  }
  config.module.rules.splice(index + 1, 0, {
    sideEffects: true,
    test: baseCssRegex,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
  })
  return config
}

module.exports = {
  addons: ['@storybook/addon-storysource', 'storybook-addon-themes'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories/*.stories.tsx'],
  webpackFinal
}
