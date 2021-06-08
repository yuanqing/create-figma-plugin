/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { IconLayerFrame16 } from '../../icon/icon-16/icon-layer-frame-16'
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
  return (
    <Textbox icon={<IconLayerFrame16 />} onInput={handleInput} value={value} />
  )
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

export const ValidateOnBlur = function () {
  const [value, setValue] = useState('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function validateOnBlur(value: string): string | boolean {
    return value !== ''
  }
  return (
    <Textbox
      onInput={handleInput}
      validateOnBlur={validateOnBlur}
      value={value}
    />
  )
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

export const OnValueInput = function () {
  const [value, setValue] = useState('Text')
  return <Textbox onValueInput={setValue} value={value} />
}
