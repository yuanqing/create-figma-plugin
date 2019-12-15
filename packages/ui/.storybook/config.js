import { configure } from '@storybook/preact'

configure(require.context('../src', true, /\.stories\.js$/), module)
