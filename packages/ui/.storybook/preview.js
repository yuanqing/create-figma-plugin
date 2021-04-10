/** @jsx h */
import { h } from 'preact'
import { addDecorator, addParameters } from '@storybook/preact'

import '../src/css/base.css'

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
