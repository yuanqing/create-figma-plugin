/** @jsx h */
/* eslint-disable no-console */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus'
import { IconSpaceHorizontal } from '../../../icon/icon-space-horizontal/icon-space-horizontal'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Components/Form/Textbox Numeric' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onChange={handleChange} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      {...useInitialFocus()}
      onChange={handleChange}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      onChange={handleChange}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onChange={handleChange} value={value} />
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return <TextboxNumeric disabled onChange={handleChange} value="42" />
}

export const NoBorder = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric noBorder onChange={handleChange} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      icon={<IconSpaceHorizontal />}
      onChange={handleChange}
      value={value}
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric icon="X" onChange={handleChange} value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric onChange={handleChange} value={value} />
}

export const IntegersOnly = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <TextboxNumeric integer onChange={handleChange} value={value} />
}

export const CustomIncrements = function () {
  const [value, setValue] = useState('42')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      incrementBig={8}
      incrementSmall={4}
      onChange={handleChange}
      value={value}
    />
  )
}

export const MinimumMaximum = function () {
  const [value, setValue] = useState('0')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxNumeric
      maximum={10}
      minimum={0}
      onChange={handleChange}
      value={value}
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('42')
  function handleNumericValueChange(newNumericValue: null | number) {
    console.log(newNumericValue)
  }
  return (
    <TextboxNumeric
      onNumericValueChange={handleNumericValueChange}
      onValueChange={setValue}
      value={value}
    />
  )
}
