/** @jsx h */
import { h } from 'preact'

import { Text } from '../../../components/text/text'
import { Muted } from '../muted'

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
