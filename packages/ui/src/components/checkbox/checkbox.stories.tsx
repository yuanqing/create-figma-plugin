/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../text/text'
import { Checkbox } from './checkbox'

export default { title: 'Checkbox' }

export const Default = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <Checkbox name="foo" onChange={setState} value={state.foo}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <Checkbox disabled name="foo" onChange={setState} value={state.foo}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <Checkbox name="foo" onChange={setState} value={state.foo}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const DisabledSelected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <Checkbox disabled name="foo" onChange={setState} value={state.foo}>
      <Text>Text</Text>
    </Checkbox>
  )
}
