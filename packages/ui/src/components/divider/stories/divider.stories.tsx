/** @jsx h */
import { h } from 'preact'

import { Divider } from '../divider'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Divider'
}

export const Default = function () {
  return <Divider />
}
