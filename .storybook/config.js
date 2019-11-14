const { configure } = require('@storybook/preact')

configure(require.context('../packages/ui/src', true, /\.stories\.js$/), module)
