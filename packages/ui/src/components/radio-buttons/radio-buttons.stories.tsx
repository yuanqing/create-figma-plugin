/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../text/text'
import { RadioButtons } from './radio-buttons'

export default { title: 'Radio Buttons' }

export const Default = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { text: <Text>foo</Text>, value: 'foo' },
        { text: <Text>bar</Text>, value: 'bar' },
        { text: <Text>baz</Text>, value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const Disabled = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <RadioButtons
      disabled
      name="foo"
      onChange={setState}
      options={[
        { text: <Text>foo</Text>, value: 'foo' },
        { text: <Text>bar</Text>, value: 'bar' },
        { text: <Text>baz</Text>, value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const WithSelectedOption = function () {
  const initialState: { foo: null | string } = { foo: 'bar' }
  const [state, setState] = useState(initialState)
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { text: <Text>foo</Text>, value: 'foo' },
        { text: <Text>bar</Text>, value: 'bar' },
        { text: <Text>baz</Text>, value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledOption = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { text: <Text>foo</Text>, value: 'foo' },
        { disabled: true, text: <Text>bar</Text>, value: 'bar' },
        { text: <Text>baz</Text>, value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledSelectedOption = function () {
  const initialState: { foo: null | string } = { foo: 'bar' }
  const [state, setState] = useState(initialState)
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { text: <Text>foo</Text>, value: 'foo' },
        { disabled: true, text: <Text>bar</Text>, value: 'bar' },
        { text: <Text>baz</Text>, value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}
