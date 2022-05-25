/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Bold } from '../bold'

export default {
  title: 'Inline Text/Bold'
}

export const Default = function () {
  return (
    <Text>
      <Bold>Text</Bold>
    </Text>
  )
}
