/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../text/text'
import { RadioButtons } from './radio-buttons'

export default { title: 'Radio Buttons' }

export const Default = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
      value={state.foo}
    />
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      disabled
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
      value={state.foo}
    />
  )
}

export const WithSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledOption = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text>, disabled: true },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <RadioButtons
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text>, disabled: true },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
      value={state.foo}
    />
  )
}
