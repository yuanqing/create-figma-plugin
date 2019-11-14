/** @jsx h */
import { h } from 'preact'
import { RadioButton } from './radio-button'
import { Text } from '../text/text'

export default { title: 'Radio Button' }

export function Normal () {
  return (
    <RadioButton name='Normal' value='bar' options={['foo', 'bar', 'baz']} />
  )
}

export function WithDisabledOption () {
  return (
    <RadioButton
      name='WithDisabledOption'
      value='bar'
      options={['foo', 'bar', { disabled: true, value: 'baz' }]}
    />
  )
}

export function WithDescription () {
  return (
    <RadioButton
      name='WithDescription'
      value='bar'
      options={[
        'foo',
        'bar',
        { value: 'baz', children: <Text muted>Description</Text> }
      ]}
    />
  )
}
