/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { SegmentedControl } from './segmented-control'

export default { title: 'Components/Form/Segmented Control' }

export const Selected = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      onValueChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      {...useInitialFocus()}
      onValueChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Disabled = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      disabled
      onValueChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      onValueChange={setValue}
      options={[
        { value: 'foo' },
        { value: 'bar' },
        { disabled: true, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const BooleanValue = function () {
  const [value, setValue] = useState(false)
  return (
    <SegmentedControl
      onValueChange={setValue}
      options={[
        { children: 'foo', value: true },
        { children: 'bar', value: false }
      ]}
      value={value}
    />
  )
}

export const NumericValue = function () {
  const [value, setValue] = useState(2)
  return (
    <SegmentedControl
      onValueChange={setValue}
      options={[
        { children: 'foo', value: 1 },
        { children: 'bar', value: 2 },
        { children: 'baz', value: 3 }
      ]}
      value={value}
    />
  )
}
