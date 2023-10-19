import { h } from 'preact'

import { IconCheckCircle32 } from '../../../icons/icon-32/icon-check-circle-32.js'
import { IconInfo32 } from '../../../icons/icon-32/icon-info-32.js'
import { IconWarning32 } from '../../../icons/icon-32/icon-warning-32.js'
import { Banner } from '../banner.js'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Banner'
}

export const Default = function () {
  return <Banner icon={<IconInfo32 />}>Text</Banner>
}

export const Success = function () {
  return (
    <Banner icon={<IconCheckCircle32 />} variant="success">
      Text
    </Banner>
  )
}

export const Warning = function () {
  return (
    <Banner icon={<IconWarning32 />} variant="warning">
      Text
    </Banner>
  )
}
