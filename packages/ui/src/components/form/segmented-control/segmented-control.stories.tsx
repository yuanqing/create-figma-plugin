/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SegmentedControl } from './segmented-control'

export default { title: 'Components/Form/Segmented Control' }

export const Unselected = function () {
  const [value, setValue] = useState<null | string>(null)
  return (
    <SegmentedControl
      onChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Selected = function () {
  const [value, setValue] = useState<null | string>('bar')
  return (
    <SegmentedControl
      onChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Disabled = function () {
  const [value, setValue] = useState<null | string>('bar')
  return (
    <SegmentedControl
      disabled
      onChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState<null | string>('bar')
  return (
    <SegmentedControl
      onChange={setValue}
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
  const [value, setValue] = useState<null | boolean>(false)
  return (
    <SegmentedControl
      onChange={setValue}
      options={[
        { children: 'foo', value: true },
        { children: 'bar', value: false }
      ]}
      value={value}
    />
  )
}

export const NumericValue = function () {
  const [value, setValue] = useState<null | number>(2)
  return (
    <SegmentedControl
      onChange={setValue}
      options={[
        { children: 'foo', value: 1 },
        { children: 'bar', value: 2 },
        { children: 'baz', value: 3 }
      ]}
      value={value}
    />
  )
}
