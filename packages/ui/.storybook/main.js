/* eslint-env node */

export default {
  addons: ['@storybook/addon-storysource', '@storybook/addon-toolbars'],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/preact-vite'
  },
  stories: ['../src/**/*.stories.tsx'],
  viteFinal: function (config) {
    if (typeof process.env.BASE_URL !== 'undefined') {
      config.base = process.env.BASE_URL
    }
    return config
  }
}
