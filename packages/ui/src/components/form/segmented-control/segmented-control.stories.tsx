/* eslint-disable no-console */
/** @jsx h */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { SegmentedControl } from './segmented-control'

export default { title: 'Components/Form/Segmented Control' }

export const Selected = function () {
  const [value, setValue] = useState('bar')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      onChange={handleChange}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState('bar')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      {...useInitialFocus()}
      onChange={handleChange}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const Disabled = function () {
  const [value, setValue] = useState('bar')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      disabled
      onChange={handleChange}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('bar')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      onChange={handleChange}
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
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue === 'true' ? true : false)
  }
  return (
    <SegmentedControl
      onChange={handleChange}
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
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseInt(newValue, 10))
  }
  return (
    <SegmentedControl
      onChange={handleChange}
      options={[
        { children: 'foo', value: 1 },
        { children: 'bar', value: 2 },
        { children: 'baz', value: 3 }
      ]}
      value={value}
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('bar')
  return (
    <SegmentedControl
      onValueChange={setValue}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}
