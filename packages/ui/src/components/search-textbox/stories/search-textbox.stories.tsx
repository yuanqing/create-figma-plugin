/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { SearchTextbox } from '../search-textbox'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Search Textbox'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <SearchTextbox onInput={handleInput} value={value} />
}

export const EmptyFocused = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />
  )
}

export const EmptyDisabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <SearchTextbox disabled onInput={handleInput} value="" />
}

export const Filled = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <SearchTextbox onInput={handleInput} value={value} />
}

export const FilledFocused = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox {...useInitialFocus()} onInput={handleInput} value={value} />
  )
}

export const FilledDisabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <SearchTextbox disabled onInput={handleInput} value="Text" />
}

export const Placeholder = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox
      onInput={handleInput}
      placeholder="placeholder"
      value={value}
    />
  )
}

export const ClearOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <SearchTextbox clearOnEscapeKeyDown onInput={handleInput} value={value} />
  )
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('Text')
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return <SearchTextbox onValueInput={handleValueInput} value={value} />
}
