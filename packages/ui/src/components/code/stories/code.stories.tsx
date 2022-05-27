/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Code as CodeComponent } from '../code'

export default {
  title: 'Inline Text/Code'
}

export const Code = function () {
  return (
    <Text>
      <CodeComponent>Text</CodeComponent>
    </Text>
  )
}
