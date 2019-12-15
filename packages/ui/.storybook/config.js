/** @jsx h */
import { h } from 'preact'
import { addDecorator, configure } from '@storybook/preact'

addDecorator(function (Story) {
  return <Story />
})
configure(require.context('../src', true, /\.stories\.js$/), module)
