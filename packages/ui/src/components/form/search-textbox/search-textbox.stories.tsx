/* eslint-disable no-console */
/** @jsx h */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { SearchTextbox } from './search-textbox'

export default { title: 'Components/Form/Search Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      onChange={handleChange}
      onClear={handleClear}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      {...useInitialFocus()}
      onChange={handleChange}
      onClear={handleClear}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      onChange={handleChange}
      onClear={handleClear}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      onChange={handleChange}
      onClear={handleClear}
      value={value}
    />
  )
}

export const ClearOnEscapeKeyDown = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      clearOnEscapeKeyDown
      onChange={handleChange}
      onClear={handleClear}
      value={value}
    />
  )
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  function handleClear() {
    throw new Error('This function should not be called')
  }
  return (
    <SearchTextbox
      disabled
      onChange={handleChange}
      onClear={handleClear}
      value="Text"
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('Text')
  function handleClear() {
    setValue('')
  }
  return (
    <SearchTextbox
      onClear={handleClear}
      onValueChange={setValue}
      value={value}
    />
  )
}
