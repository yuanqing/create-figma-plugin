/** @jsx h */
import { h } from 'preact'

import { Divider as DividerComponent } from '../divider'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Divider'
}

export const Divider = function () {
  return <DividerComponent />
}
