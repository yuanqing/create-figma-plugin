/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { SearchTextbox } from './search-textbox'

export default { title: 'Components/Search Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <SearchTextbox onInput={handleInput} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox
      onInput={handleInput}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <SearchTextbox onInput={handleInput} value={value} />
}

export const ClearOnEscapeKeyDown = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox clearOnEscapeKeyDown onInput={handleInput} value={value} />
  )
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />
}

export const OnValueChange = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox onValueInput={setValue} value={value} />
}
