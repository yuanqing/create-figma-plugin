/** @jsx h */
/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../../../../icons/icon-16/icon-layer-frame-16'
import { Textbox } from '../textbox'

export default {
  parameters: {
    fixedWidth: true,
    order: 2
  },
  title: 'Components/Textbox/Border'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />
}

export const EmptyFocused = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      {...useInitialFocus()}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      onInput={handleInput}
      placeholder="placeholder"
      value={value}
      variant="border"
    />
  )
}

export const PlaceholderFocused = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      {...useInitialFocus()}
      onInput={handleInput}
      placeholder="placeholder"
      value={value}
      variant="border"
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />
}

export const Focused = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      {...useInitialFocus()}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <Textbox disabled onInput={handleInput} value="Text" variant="border" />
  )
}

export const Icon = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const IconDisabled = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      disabled
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
      value={value}
    />
  )
}

export const IconText = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox icon="X" onInput={handleInput} value={value} variant="border" />
  )
}

export const IconTextDisabled = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      disabled
      icon="X"
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const Mixed = function () {
  const [value, setValue] = useState<string>(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} variant="border" />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      onInput={handleInput}
      revertOnEscapeKeyDown
      value={value}
      variant="border"
    />
  )
}

export const ValidateOnBlur = function () {
  const [value, setValue] = useState<string>('Text')
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

export const Password = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox onInput={handleInput} password value={value} variant="border" />
  )
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('Text')
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox onValueInput={handleValueInput} value={value} variant="border" />
  )
}
