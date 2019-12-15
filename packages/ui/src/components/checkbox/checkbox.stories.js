/** @jsx h */
import { h } from 'preact'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export default { title: 'Checkbox' }

export const Normal = function () {
  return (
    <Checkbox name='Normal' value={false}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  return (
    <Checkbox disabled name='Disabled' value={false}>
      <Text>Text</Text>
    </Checkbox>
  )
}
