/** @jsx h */
import { h } from 'preact'
import { SegmentedControl } from './segmented-control'

export default { title: 'Segmented Control' }

export function Normal () {
  return (
    <SegmentedControl
      name='Normal'
      value='bar'
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
    />
  )
}

export function WithDisabledOption () {
  return (
    <SegmentedControl
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
