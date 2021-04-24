/** @jsx h */
/* eslint-disable no-console */
import { MIXED_NUMBER, MIXED_STRING } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus'
import { IconSpaceHorizontal } from '../../../icon/icon-space-horizontal/icon-space-horizontal'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Components/Form/Textbox Numeric' }

export const Empty = function () {
  const [string, setString] = useState('')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const Focused = function () {
  const [string, setString] = useState('')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      {...useInitialFocus()}
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const Placeholder = function () {
  const [string, setString] = useState('')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      placeholder="Placeholder"
      value={string}
    />
  )
}

export const Filled = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const Disabled = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      disabled
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const NoBorder = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      noBorder
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const Icon = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      icon={<IconSpaceHorizontal />}
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const TextIcon = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      icon="X"
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const Mixed = function () {
  const [string, setString] = useState(MIXED_STRING)
  function handleNumberChange(value: null | number) {
    console.log(value === MIXED_NUMBER)
  }
  return (
    <TextboxNumeric
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const IntegersOnly = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      integer
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const CustomIncrements = function () {
  const [string, setString] = useState('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      incrementBig={8}
      incrementSmall={4}
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}

export const MinimumMaximum = function () {
  const [string, setString] = useState('0')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      maximum={10}
      minimum={0}
      onNumericValueChange={handleNumberChange}
      onValueChange={setString}
      value={string}
    />
  )
}
