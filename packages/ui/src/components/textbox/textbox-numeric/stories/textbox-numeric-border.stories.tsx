/** @jsx h */
/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../../../../icons/icon-16/icon-layer-frame-16'
import { TextboxNumeric } from '../textbox-numeric'

export default {
  parameters: {
    fixedWidth: true,
    order: 2
  },
  title: 'Components/Textbox Numeric/Border'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />
}

export const EmptyFocused = function () {
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
    <TextboxNumeric
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
    <TextboxNumeric
      {...useInitialFocus()}
      onInput={handleInput}
      placeholder="placeholder"
      value={value}
      variant="border"
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
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />
}

export const Focused = function () {
  const [value, setValue] = useState<string>('42')
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
      variant="border"
    />
  )
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <TextboxNumeric
      disabled
      onInput={handleInput}
      value="42"
      variant="border"
    />
  )
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
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const IconDisabled = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      disabled
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const IconText = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      icon="X"
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
}

export const IconTextDisabled = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
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
  return <TextboxNumeric onInput={handleInput} value={value} variant="border" />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      onInput={handleInput}
      revertOnEscapeKeyDown
      value={value}
      variant="border"
    />
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
      variant="border"
    />
  )
}

export const IntegersOnly = function () {
  const [value, setValue] = useState<string>('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      integer
      onInput={handleInput}
      value={value}
      variant="border"
    />
  )
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
      incrementBig={8}
      incrementSmall={4}
      onInput={handleInput}
      value={value}
      variant="border"
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
      variant="border"
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
      variant="border"
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
      variant="border"
    />
  )
}

export const SuffixMixed = function () {
  const [value, setValue] = useState<string>(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      onInput={handleInput}
      suffix="%"
      value={value}
      variant="border"
    />
  )
}

export const SuffixRevertOnEscapeKeyDown = function () {
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
      revertOnEscapeKeyDown
      suffix="%"
      value={value}
      variant="border"
    />
  )
}

export const SuffixValidateOnBlur = function () {
  const [value, setValue] = useState<string>('100%')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function validateOnBlur(value: null | number): number | boolean {
    if (value === null) {
      return 100
    }
    return true
  }
  return (
    <TextboxNumeric
      maximum={100}
      minimum={0}
      onInput={handleInput}
      revertOnEscapeKeyDown
      suffix="%"
      validateOnBlur={validateOnBlur}
      value={value}
      variant="border"
    />
  )
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
      variant="border"
    />
  )
}
