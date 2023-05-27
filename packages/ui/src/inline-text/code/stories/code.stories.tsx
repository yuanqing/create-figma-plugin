import { h } from 'preact'

import { Text } from '../../../components/text/text.js'
import { Code } from '../code.js'

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
