/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../text/text'
import { Tabs } from './tabs'

export default { title: 'Tabs' }

export const Default = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <Tabs
      name="foo"
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', view: <Text>Foo</Text> },
        { value: 'bar', view: <Text>Bar</Text> },
        { value: 'baz', view: <Text>Baz</Text> }
      ]}
    />
  )
}

export const WithSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <Tabs
      name="foo"
      value={state.foo}
      onChange={setState}
      options={[
        { value: 'foo', view: <Text>Foo</Text> },
        { value: 'bar', view: <Text>Bar</Text> },
        { value: 'baz', view: <Text>Baz</Text> }
      ]}
    />
  )
}
