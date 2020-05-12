/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export default { title: 'Checkbox' }

export const Default = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <Checkbox name='foo' value={state.foo} onChange={setState}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <Checkbox disabled name='foo' value={state.foo} onChange={setState}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <Checkbox name='foo' value={state.foo} onChange={setState}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const DisabledSelected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <Checkbox disabled name='foo' value={state.foo} onChange={setState}>
      <Text>Text</Text>
    </Checkbox>
  )
}
