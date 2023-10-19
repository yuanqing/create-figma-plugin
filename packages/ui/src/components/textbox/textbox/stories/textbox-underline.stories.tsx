/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useRef, useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconLayerFrame16 } from '../../../../icons/icon-16/icon-layer-frame-16.js'
import { Textbox } from '../textbox.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['3'],
  title: 'Components/Textbox/Underline'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} variant="underline" />
}

export const Focused = function () {
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
      variant="underline"
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
      placeholder="Placeholder"
      value={value}
      variant="underline"
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
  return <Textbox onInput={handleInput} value={value} variant="underline" />
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <Textbox disabled onInput={handleInput} value="Text" variant="underline" />
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
      variant="underline"
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox icon="W" onInput={handleInput} value={value} variant="underline" />
  )
}

export const Mixed = function () {
  const [value, setValue] = useState<string>(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onInput={handleInput} value={value} variant="underline" />
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
      variant="underline"
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
    <Textbox onInput={handleInput} password value={value} variant="underline" />
  )
}

export const Ref = function () {
  const ref: RefObject<HTMLInputElement> = useRef(null)
  const [value, setValue] = useState<string>('Text')
  function handleInput() {
    if (ref.current === null) {
      throw new Error('`ref.current` is `null`')
    }
    console.log(ref.current)
    const newValue = ref.current.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      ref={ref}
      onInput={handleInput}
      value={value}
      variant="underline"
    />
  )
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('Text')
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox
      onValueInput={handleValueInput}
      value={value}
      variant="underline"
    />
  )
}
