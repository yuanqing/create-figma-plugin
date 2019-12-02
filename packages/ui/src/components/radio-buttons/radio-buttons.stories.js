/** @jsx h */
import { h } from 'preact'
import { RadioButtons } from './radio-buttons'
import { Text } from '../text/text'

export default { title: 'Radio Buttons' }

export function Normal () {
  return (
    <RadioButtons
      small
      name='Normal'
      value='bar'
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}

export function WithDisabledOption () {
  return (
    <RadioButtons
      small
      name='WithDisabledOption'
      value='bar'
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text>, disabled: true }
      ]}
    />
  )
}

export function WithText () {
  return (
    <RadioButtons
      small
      name='WithText'
      value='bar'
      options={[
        { value: 'foo', text: <Text>foo</Text> },
        { value: 'bar', text: <Text>bar</Text> },
        { value: 'baz', text: <Text>baz</Text> }
      ]}
    />
  )
}
