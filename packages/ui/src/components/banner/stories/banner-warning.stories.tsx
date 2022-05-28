/** @jsx h */
import { h } from 'preact'

import { IconWarning32 } from '../../../icons/icon-32/icon-warning-32'
import { Banner } from '../banner'

export default {
  parameters: {
    fixedWidth: true,
    order: 2
  },
  title: 'Components/Banner/Warning'
}

export const ShortText = function () {
  return (
    <Banner icon={<IconWarning32 />} variant="warning">
      Text
    </Banner>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  return (
    <Banner icon={<IconWarning32 />} variant="warning">
      {longText}
    </Banner>
  )
}
