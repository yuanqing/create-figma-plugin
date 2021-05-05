/** @jsx h */
import { h } from 'preact'
import { addDecorator, addParameters } from '@storybook/preact'

import '../src/css/base.css'

addDecorator(function (Story) {
  return <Story />
})

addParameters({
  options: {
    storySort: function (x, y) {
      if (x[1].kind === y[1].kind) {
        return 0
      }
      return x[1].id.localeCompare(y[1].id, undefined, { numeric: true })
    }
  }
})
