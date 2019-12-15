/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { RadioButtons } from './radio-buttons'
import { Text } from '../text/text'

export default { title: 'Radio Buttons' }

export const Normal = function () {
  const [value, setValue] = useState('bar')
  return (
    <RadioButtons
      name='normal'
      value={value}
      onChange={setValue}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export const WithDisabledOption = function () {
  const [value, setValue] = useState('bar')
  return (
    <RadioButtons
      name='withDisabledOption'
      value={value}
      onChange={setValue}
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text>, disabled: true }
      ]}
    />
  )
}
