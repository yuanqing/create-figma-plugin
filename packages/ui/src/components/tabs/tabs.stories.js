/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Tabs } from './tabs'
import { Text } from '../text/text'

export default { title: 'Tabs' }

export const Default = function () {
  const [value, setValue] = useState('bar')
  return (
    <Tabs
      name='qux'
      value={value}
      onChange={setValue}
      options={[
        { value: 'foo', view: <Text>Foo</Text> },
        { value: 'bar', view: <Text>Bar</Text> },
        { value: 'baz', view: <Text>Baz</Text> }
      ]}
    />
  )
}
