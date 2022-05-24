/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Code } from '../code'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Code'
}

export const Default = function () {
  return (
    <Text>
      <Code>Text</Code>
    </Text>
  )
}
