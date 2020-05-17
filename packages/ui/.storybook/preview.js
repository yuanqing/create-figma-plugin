/** @jsx h */
import { h } from 'preact'
import { addDecorator, addParameters, configure } from '@storybook/preact'

addDecorator(function (Story) {
  return <Story />
})

addParameters({
  options: {
    storySort: function (a, b) {
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    }
  }
})

configure(require.context('../src', true, /\.stories\.tsx$/), module)
