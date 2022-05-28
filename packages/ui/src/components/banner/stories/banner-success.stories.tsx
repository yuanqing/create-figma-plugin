/** @jsx h */
import { h } from 'preact'

import { IconCheckCircle32 } from '../../../icons/icon-32/icon-check-circle-32'
import { Banner } from '../banner'

export default {
  parameters: {
    fixedWidth: true,
    order: 3
  },
  title: 'Components/Banner/Success'
}

export const ShortText = function () {
  return (
    <Banner icon={<IconCheckCircle32 />} variant="success">
      Text
    </Banner>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  return (
    <Banner icon={<IconCheckCircle32 />} variant="success">
      {longText}
    </Banner>
  )
}
