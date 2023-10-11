/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useRef, useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus.js'
import { TextboxMultiline } from '../textbox-multiline.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['2'],
  title: 'Components/Textbox Multiline/Border'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline onInput={handleInput} value={value} variant="border" />
  )
}

export const EmptyFocused = function () {
  const [value, setValue] = useState<string>('')
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
      variant="border"
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<string>('')
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
      variant="border"
    />
  )
}

export const PlaceholderFocused = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      {...useInitialFocus()}
      onInput={handleInput}
      placeholder="Placeholder"
      value={value}
      variant="border"
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline onInput={handleInput} value={value} variant="border" />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('Text')
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
      variant="border"
    />
  )
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <TextboxMultiline
      disabled
      onInput={handleInput}
      value="Text"
      variant="border"
    />
  )
}

export const Mixed = function () {
  const [value, setValue] = useState<string>(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline onInput={handleInput} value={value} variant="border" />
  )
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('Text')
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
      variant="border"
    />
  )
}

export const ValidateOnBlur = function () {
  const [value, setValue] = useState<string>('Text')
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
      variant="border"
    />
  )
}

export const Rows = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      onInput={handleInput}
      rows={5}
      value={value}
      variant="border"
    />
  )
}

export const AutoGrow = function () {
  const [value, setValue] = useState<string>('Text')
  function handleInput(event: JSX.TargetedEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxMultiline
      grow
      onInput={handleInput}
      rows={1}
      value={value}
      variant="border"
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
    <TextboxMultiline
      onValueInput={handleValueInput}
      value={value}
      variant="border"
    />
  )
}

export const Ref = function () {
  const ref: RefObject<HTMLTextAreaElement> = useRef(null)
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
    <TextboxMultiline
      ref={ref}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}
