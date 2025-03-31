/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useRef, useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconFrame16 } from '../../../../icons/icon-16/icon-frame-16.js'
import { TextboxNumeric } from '../textbox-numeric.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['1'],
  title: 'Components/Textbox Numeric'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      {...useInitialFocus()}
      onInput={handleInput}
      value={value}
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
    <TextboxNumeric
      onInput={handleInput}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      icon={<IconFrame16 />}
      onInput={handleInput}
      value={value}
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric icon="W" onInput={handleInput} value={value} />
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" />
}

export const DisabledIcon = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <TextboxNumeric
      disabled
      icon={<IconFrame16 />}
      onInput={handleInput}
      value="42"
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
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric onInput={handleInput} revertOnEscapeKeyDown value={value} />
  )
}

export const ValidateOnBlur = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function validateOnBlur(value: null | number): null | number | boolean {
    console.log(value)
    return value !== null
  }
  return (
    <TextboxNumeric
      onInput={handleInput}
      validateOnBlur={validateOnBlur}
      value={value}
    />
  )
}

export const IntegerOnly = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} />
}

export const CustomIncrements = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      incrementBig={100}
      incrementSmall={10}
      onInput={handleInput}
      value={value}
    />
  )
}

export const CustomSmallIncrements = function () {
  const [value, setValue] = useState<string>('0')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      incrementBig={0.5}
      incrementSmall={0.1}
      onInput={handleInput}
      value={value}
    />
  )
}

export const MinimumMaximum = function () {
  const [value, setValue] = useState<string>('0')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      maximum={10}
      minimum={0}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Suffix = function () {
  const [value, setValue] = useState<string>('100%')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      maximum={100}
      minimum={0}
      onInput={handleInput}
      suffix="%"
      value={value}
    />
  )
}

export const Ref = function () {
  const ref: RefObject<HTMLInputElement> = useRef(null)
  const [value, setValue] = useState<string>('42')
  function handleInput() {
    if (ref.current === null) {
      throw new Error('`ref.current` is `null`')
    }
    console.log(ref.current)
    const newValue = ref.current.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric ref={ref} onInput={handleInput} value={value} />
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('42')
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue)
  }
  return (
    <TextboxNumeric
      onNumericValueInput={handleNumericValueInput}
      onValueInput={handleValueInput}
      value={value}
    />
  )
}
