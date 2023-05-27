import { h } from 'preact'

import { LoadingIndicator } from '../loading-indicator.js'

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
