/** @jsx h */
import { h } from 'preact'

import { Text } from '../../../components/text/text'
import { Muted as MutedComponent } from '../muted'

export default {
  title: 'Inline Text/Muted'
}

export const Muted = function () {
  return (
    <Text>
      <MutedComponent>Text</MutedComponent>
    </Text>
  )
}
