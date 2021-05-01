/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus'
import { SearchTextbox } from './search-textbox'

export default { title: 'Components/Search Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleClear() {
    setValue('')
  }
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox onClear={handleClear} onInput={handleInput} value={value} />
  )
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleClear() {
    setValue('')
  }
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox
      {...useInitialFocus()}
      onClear={handleClear}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleClear() {
    setValue('')
  }
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox
      onClear={handleClear}
      onInput={handleInput}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleClear() {
    setValue('')
  }
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox onClear={handleClear} onInput={handleInput} value={value} />
  )
}

export const ClearOnEscapeKeyDown = function () {
  const [value, setValue] = useState('Text')
  function handleClear() {
    setValue('')
  }
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox
      clearOnEscapeKeyDown
      onClear={handleClear}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Disabled = function () {
  function handleClear() {
    throw new Error('This function should not be called')
  }
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <SearchTextbox
      disabled
      onClear={handleClear}
      onInput={handleInput}
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
