import { h } from 'preact'

import { IconApprovedCheckmark24 } from '../../../icons/icon-24/icon-approved-checkmark-24.js'
import { IconInfoSmall24 } from '../../../icons/icon-24/icon-info-small-24.js'
import { IconWarningSmall24 } from '../../../icons/icon-24/icon-warning-small-24.js'
import { Banner } from '../banner.js'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Banner'
}

export const Default = function () {
  return <Banner icon={<IconInfoSmall24 />}>Text</Banner>
}

export const Success = function () {
  return (
    <Banner icon={<IconApprovedCheckmark24 />} variant="success">
      Text
    </Banner>
  )
}

export const Warning = function () {
  return (
    <Banner icon={<IconWarningSmall24 />} variant="warning">
      Text
    </Banner>
  )
}
