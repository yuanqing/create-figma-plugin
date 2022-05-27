/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { SelectableItem } from '../selectable-item'

export default {
  parameters: {
    fixedWidth: true,
    order: 2
  },
  title: 'Components/Selectable Item/Selected'
}

export const Passive = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const Focused = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem
      {...useInitialFocus()}
      onChange={handleChange}
      value={value}
    >
      Text
    </SelectableItem>
  )
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <SelectableItem disabled onChange={handleChange} value={true}>
      Text
    </SelectableItem>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem onChange={handleChange} value={value}>
      {longText}
    </SelectableItem>
  )
}

export const Bold = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const Indent = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleValueChange(newValue: boolean) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SelectableItem onValueChange={handleValueChange} value={value}>
      Text
    </SelectableItem>
  )
}
