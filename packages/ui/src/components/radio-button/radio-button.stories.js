/** @jsx h */
import { h } from 'preact'
import { RadioButton } from './radio-button'

export default { title: 'Radio Button' }

export function Normal () {
  return (
    <RadioButton
      name='Normal'
      value='bar'
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
    />
  )
}

export function WithDisabledOption () {
  return (
    <RadioButton
      name='WithDisabledOption'
      value='bar'
      options={[
        { value: 'foo' },
        { value: 'bar' },
        { value: 'baz', disabled: true }
      ]}
    />
  )
}

export function WithText () {
  return (
    <RadioButton
      name='WithText'
      value='bar'
      options={[
        { value: 'foo', text: 'Foo' },
        { value: 'bar', text: 'Bar' },
        { value: 'baz', text: 'Baz' }
      ]}
    />
  )
}
