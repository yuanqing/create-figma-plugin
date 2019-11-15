const { configure } = require('@storybook/preact')

configure(require.context('../src', true, /\.stories\.js$/), module)
