/* eslint-disable no-console */
/** @jsx h */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { IconSearch } from '../../icon/icon-search/icon-search'
import { Textbox } from './textbox'

export default { title: 'Components/Form/Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onChange={handleChange} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Textbox {...useInitialFocus()} onChange={handleChange} value={value} />
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
    <Textbox onChange={handleChange} placeholder="Placeholder" value={value} />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onChange={handleChange} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox disabled onChange={handleChange} value={value} />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox noBorder onChange={handleChange} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox icon={<IconSearch />} onChange={handleChange} value={value} />
}

export const TextIcon = function () {
  const [value, setValue] = useState('Text')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox icon="X" onChange={handleChange} value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Textbox onChange={handleChange} value={value} />
}

export const OnValueChange = function () {
  const [value, setValue] = useState('Text')
  return <Textbox onValueChange={setValue} value={value} />
}
