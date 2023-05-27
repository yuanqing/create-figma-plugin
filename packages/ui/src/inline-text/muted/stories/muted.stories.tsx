import { h } from 'preact'

import { Text } from '../../../components/text/text.js'
import { Muted } from '../muted.js'

export default {
  title: 'Inline Text/Muted'
}

export const Default = function () {
  return (
    <Text>
      <Muted>Text</Muted>
    </Text>
  )
}
