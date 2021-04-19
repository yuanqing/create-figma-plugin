/* eslint-disable no-console */
/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { iconSpaceHorizontal } from '../../../icon/icon-space-horizontal/icon-space-horizontal'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'ui/Form/Textbox Numeric' }

export const Empty = function () {
  const [string, setString] = useState<null | string>('')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const Placeholder = function () {
  const [string, setString] = useState<null | string>('')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onChange={setString}
      onNumberChange={handleNumberChange}
      placeholder="Placeholder"
      value={string}
    />
  )
}

export const Filled = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const Disabled = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      disabled
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const NoBorder = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      noBorder
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const Icon = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      icon={iconSpaceHorizontal}
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const TextIcon = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      icon="X"
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const Mixed = function () {
  const [string, setString] = useState<null | string>(null)
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const IntegersOnly = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      integer
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const CustomIncrements = function () {
  const [string, setString] = useState<null | string>('42')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      incrementBig={8}
      incrementSmall={4}
      integer
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}

export const MinimumMaximum = function () {
  const [string, setString] = useState<null | string>('0')
  function handleNumberChange(value: null | number) {
    console.log(value)
  }
  return (
    <TextboxNumeric
      integer
      maximum={10}
      minimum={0}
      onChange={setString}
      onNumberChange={handleNumberChange}
      value={string}
    />
  )
}
