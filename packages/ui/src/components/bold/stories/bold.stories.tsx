/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Bold } from '../bold'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Bold'
}

export const Default = function () {
  return (
    <Text>
      <Bold>Text</Bold>
    </Text>
  )
}
