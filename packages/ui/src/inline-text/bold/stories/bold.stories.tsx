import { h } from 'preact'

import { Text } from '../../../components/text/text.js'
import { Bold } from '../bold.js'

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
