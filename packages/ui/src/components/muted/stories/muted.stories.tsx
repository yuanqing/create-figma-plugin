/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Muted } from '../muted'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Muted'
}

export const Default = function () {
  return (
    <Text>
      <Muted>Text</Muted>
    </Text>
  )
}
