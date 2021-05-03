/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus'
import { MIXED_STRING } from '../../utilities/mixed-values'
import { IconSearch } from '../icon/icon-search/icon-search'
import { Textbox } from './textbox'

export default { title: 'Components/Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox {...useInitialFocus()} onInput={handleInput} value={value} />
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox onInput={handleInput} placeholder="Placeholder" value={value} />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} />
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <Textbox disabled onInput={handleInput} value="Text" />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox noBorder onInput={handleInput} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox icon={<IconSearch />} onInput={handleInput} value={value} />
}

export const TextIcon = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox icon="X" onInput={handleInput} value={value} />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} revertOnEscapeKeyDown value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} />
}

export const Password = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} password value={value} />
}

export const OnValueChange = function () {
  const [value, setValue] = useState('Text')
  return <Textbox onValueChange={setValue} value={value} />
}
