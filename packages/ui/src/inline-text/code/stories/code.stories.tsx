/** @jsx h */
import { h } from 'preact'

import { Text } from '../../../components/text/text'
import { Code } from '../code'

export default {
  title: 'Inline Text/Code'
}

export const Default = function () {
  return (
    <Text>
      <Code>Text</Code>
    </Text>
  )
}
