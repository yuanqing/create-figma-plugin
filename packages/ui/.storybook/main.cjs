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
  stories: ['../src/**/stories/*.stories.tsx']
}
