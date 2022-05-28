/** @jsx h */
import { h } from 'preact'

import { IconInfo32 } from '../../../icons/icon-32/icon-info-32'
import { Banner } from '../banner'

export default {
  parameters: {
    fixedWidth: true,
    order: 1
  },
  title: 'Components/Banner/Default'
}

export const ShortText = function () {
  return <Banner icon={<IconInfo32 />}>Text</Banner>
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  return <Banner icon={<IconInfo32 />}>{longText}</Banner>
}
