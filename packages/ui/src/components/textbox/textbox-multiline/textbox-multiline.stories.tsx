/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { TextboxMultiline } from './textbox-multiline'

export default { title: 'Components/Textbox Multiline' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxMultiline onInput={handleInput} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      {...useInitialFocus()}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      onInput={handleInput}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxMultiline onInput={handleInput} value={value} />
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <TextboxMultiline disabled onInput={handleInput} value="Text" />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxMultiline noBorder onInput={handleInput} value={value} />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      onInput={handleInput}
      revertOnEscapeKeyDown
      value={value}
    />
  )
}

export const ValidateOnBlur = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function validateOnBlur(value: string): string | boolean {
    return value !== ''
  }
  return (
    <TextboxMultiline
      onInput={handleInput}
      validateOnBlur={validateOnBlur}
      value={value}
    />
  )
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxMultiline onInput={handleInput} value={value} />
}

export const Rows = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxMultiline onInput={handleInput} rows={5} value={value} />
}

export const OnValueInput = function () {
  const [value, setValue] = useState('Text')
  return <TextboxMultiline onValueInput={setValue} value={value} />
}
