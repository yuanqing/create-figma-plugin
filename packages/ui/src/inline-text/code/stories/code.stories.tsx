/** @jsx h */
import { h } from 'preact'

import { Text } from '../../../components/text/text'
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
