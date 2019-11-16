/** @jsx h */
import { h } from 'preact'
import { Checkbox } from './checkbox'

export default { title: 'Checkbox' }

export function Normal () {
  return <Checkbox name='Normal' value={false} text='Text' />
}

export function Disabled () {
  return <Checkbox disabled name='NormalDisabled' value={false} text='Text' />
}
