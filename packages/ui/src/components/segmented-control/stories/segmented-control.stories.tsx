/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { IconTextAlignCenter16 } from '../../../icons/icon-16/icon-text-align-center-16'
import { IconTextAlignLeft16 } from '../../../icons/icon-16/icon-text-align-left-16'
import { IconTextAlignRight16 } from '../../../icons/icon-16/icon-text-align-right-16'
import { SegmentedControl, SegmentedControlOption } from '../segmented-control'

export default { title: 'Components/Segmented Control' }

export const Selected = function () {
  const [value, setValue] = useState<string>('bar')
  const options: Array<SegmentedControlOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl onChange={handleChange} options={options} value={value} />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('bar')
  const options: Array<SegmentedControlOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      {...useInitialFocus()}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const Disabled = function () {
  const options: Array<SegmentedControlOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <SegmentedControl
      disabled
      onChange={handleChange}
      options={options}
      value="bar"
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState<string>('bar')
  const options: Array<SegmentedControlOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { disabled: true, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl onChange={handleChange} options={options} value={value} />
  )
}

export const BooleanValue = function () {
  const [value, setValue] = useState<boolean>(false)
  const options: Array<SegmentedControlOption<boolean>> = [
    { children: 'foo', value: true },
    { children: 'bar', value: false }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue === 'true' ? true : false)
  }
  return (
    <SegmentedControl onChange={handleChange} options={options} value={value} />
  )
}

export const NumberValue = function () {
  const [value, setValue] = useState<number>(2)
  const options: Array<SegmentedControlOption<number>> = [
    { children: 'foo', value: 1 },
    { children: 'bar', value: 2 },
    { children: 'baz', value: 3 }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseInt(newValue, 10))
  }
  return (
    <SegmentedControl onChange={handleChange} options={options} value={value} />
  )
}

export const IconChildren = function () {
  const [value, setValue] = useState<string>('align-left')
  const options: Array<SegmentedControlOption> = [
    { children: <IconTextAlignLeft16 />, value: 'align-left' },
    { children: <IconTextAlignCenter16 />, value: 'align-center' },
    { children: <IconTextAlignRight16 />, value: 'align-right' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl onChange={handleChange} options={options} value={value} />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<string>('bar')
  function handleValueChange(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      onValueChange={handleValueChange}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={value}
    />
  )
}
