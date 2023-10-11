import { h } from 'preact'

import { IconInfo32 } from '../../../icons/icon-32/icon-info-32.js'
import { Banner } from '../banner.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['1'],
  title: 'Components/Banner/Default'
}

export const ShortText = function () {
  return <Banner icon={<IconInfo32 />}>Text</Banner>
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  return <Banner icon={<IconInfo32 />}>{longText}</Banner>
}
