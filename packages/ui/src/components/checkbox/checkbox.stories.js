/** @jsx h */
import { h } from 'preact'
import { Checkbox } from './checkbox'

export default { title: 'Checkbox' }

export function Normal () {
  return (
    <Checkbox name='Normal' value={false}>
      Text
    </Checkbox>
  )
}

export function Disabled () {
  return (
    <Checkbox disabled name='Disabled' value={false}>
      Text
    </Checkbox>
  )
}
