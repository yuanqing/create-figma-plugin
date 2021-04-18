/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../text/text'
import { Tabs } from './tabs'

export default { title: 'Tabs' }

export const Default = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <Tabs<string, 'foo'>
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', view: <Text>Foo</Text> },
        { value: 'bar', view: <Text>Bar</Text> },
        { value: 'baz', view: <Text>Baz</Text> }
      ]}
      value={state.foo}
    />
  )
}

export const WithSelectedOption = function () {
  const initialState: { foo: null | string } = { foo: 'bar' }
  const [state, setState] = useState(initialState)
  return (
    <Tabs<string, 'foo'>
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo', view: <Text>Foo</Text> },
        { value: 'bar', view: <Text>Bar</Text> },
        { value: 'baz', view: <Text>Baz</Text> }
      ]}
      value={state.foo}
    />
  )
}
