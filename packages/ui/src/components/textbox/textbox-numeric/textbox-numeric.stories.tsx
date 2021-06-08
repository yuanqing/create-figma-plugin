/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { IconLayerFrame16 } from '../../icon/icon-16/icon-layer-frame-16'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Components/Textbox Numeric' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
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
  const [value, setValue] = useState('')
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
  const [value, setValue] = useState('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return <TextboxNumeric disabled onInput={handleInput} value="42" />
}

export const NoBorder = function () {
  const [value, setValue] = useState('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric noBorder onInput={handleInput} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('42')
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
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric icon="X" onInput={handleInput} value={value} />
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState('42')
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
  const [value, setValue] = useState('42')
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

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} value={value} />
}

export const IntegersOnly = function () {
  const [value, setValue] = useState('42')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric integer onInput={handleInput} value={value} />
}

export const CustomIncrements = function () {
  const [value, setValue] = useState('42')
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
    />
  )
}

export const MinimumMaximum = function () {
  const [value, setValue] = useState('0')
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
  const [value, setValue] = useState('100%')
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

export const SuffixRevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState('100%')
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
    />
  )
}

export const SuffixValidateOnBlur = function () {
  const [value, setValue] = useState('100%')
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
    />
  )
}

export const SuffixMixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onInput={handleInput} suffix="%" value={value} />
}

export const OnValueInput = function () {
  const [value, setValue] = useState('42')
  function handleNumericValueInput(newNumericValue: null | number) {
    console.log(newNumericValue)
  }
  return (
    <TextboxNumeric
      onNumericValueInput={handleNumericValueInput}
      onValueInput={setValue}
      value={value}
    />
  )
}
