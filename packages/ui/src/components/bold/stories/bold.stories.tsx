/** @jsx h */
import { h } from 'preact'

import { Text } from '../../text/text'
import { Bold as BoldComponent } from '../bold'

export default {
  title: 'Inline Text/Bold'
}

export const Bold = function () {
  return (
    <Text>
      <BoldComponent>Text</BoldComponent>
    </Text>
  )
}
