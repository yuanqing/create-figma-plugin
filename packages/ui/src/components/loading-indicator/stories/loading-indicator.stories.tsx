/** @jsx h */
import { h } from 'preact'

import { LoadingIndicator } from '../loading-indicator'

export default {
  parameters: {
    fixedWidth: false
  },
  title: 'Components/Loading Indicator'
}

export const Default = function () {
  return <LoadingIndicator />
}

export const CustomColor = function () {
  return <LoadingIndicator color="brand" />
}
