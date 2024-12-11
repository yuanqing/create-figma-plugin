/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconTextAlignCenter24 } from '../../../icons/icon-24/icon-text-align-center-24.js'
import { IconTextAlignLeft24 } from '../../../icons/icon-24/icon-text-align-left-24.js'
import { IconTextAlignRight24 } from '../../../icons/icon-24/icon-text-align-right-24.js'
import {
  SegmentedControl,
  SegmentedControlOption
} from '../segmented-control.js'

export default { title: 'Components/Segmented Control' }

export const Passive = function () {
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

export const IconChildren = function () {
  const [value, setValue] = useState<string>('align-left')
  const options: Array<SegmentedControlOption> = [
    { children: <IconTextAlignLeft24 />, value: 'align-left' },
    { children: <IconTextAlignCenter24 />, value: 'align-center' },
    { children: <IconTextAlignRight24 />, value: 'align-right' }
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
  const options: Array<SegmentedControlOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' }
  ]
  function handleValueChange(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SegmentedControl
      onValueChange={handleValueChange}
      options={options}
      value={value}
    />
  )
}
