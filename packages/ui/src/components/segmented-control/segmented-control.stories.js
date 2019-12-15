/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { SegmentedControl } from './segmented-control'

export default { title: 'Segmented Control' }

export const Default = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
    />
  )
}

export const WithDisabledOption = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      options={[
        { value: 'foo' },
        { value: 'bar' },
        { value: 'baz', disabled: true }
      ]}
    />
  )
}
