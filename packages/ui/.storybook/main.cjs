/* eslint-env node */

module.exports = {
  addons: [
    '@storybook/addon-storysource',
    'storybook-dark-mode',
    'storybook-addon-themes'
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  stories: ['../src/**/stories/*.stories.tsx'],
  viteFinal: function (config) {
    if (typeof process.env.BASE_URL !== 'undefined') {
      config.base = process.env.BASE_URL
    }
    return config
  }
}
