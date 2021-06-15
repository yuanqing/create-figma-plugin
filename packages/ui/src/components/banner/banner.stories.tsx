/** @jsx h */
import { h } from 'preact'

import { IconInfo32 } from '../icon/icon-32/icon-info-32'
import { IconWarningFilled32 } from '../icon/icon-32/icon-warning-filled-32'
import { Banner } from './banner'

export default { title: 'Components/Banner' }

export const Default = function () {
  return <Banner icon={<IconInfo32 />}>Text</Banner>
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  return <Banner icon={<IconInfo32 />}>{longText}</Banner>
}

export const Upsell = function () {
  return (
    <Banner icon={<IconInfo32 />} type="upsell">
      Text
    </Banner>
  )
}

export const Warning = function () {
  return (
    <Banner icon={<IconWarningFilled32 />} type="warning">
      Text
    </Banner>
  )
}
