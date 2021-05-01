/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { IconSearch } from '../../icon/icon-search/icon-search'
import {
  TextboxAutocomplete,
  TextboxAutocompleteOption
} from './textbox-autocomplete'

export default { title: 'Components/Textbox Autocomplete' }

export const Empty = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      {...useInitialFocus()}
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const Disabled = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput() {
    throw new Error('This function should not be called')
  }
  function handleOptionClick() {
    throw new Error('This function should not be called')
  }
  return (
    <TextboxAutocomplete
      disabled
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value="foo"
    />
  )
}

export const NoBorder = function () {
  const [value, setValue] = useState('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      noBorder
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const Icon = function () {
  const [value, setValue] = useState('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      icon={<IconSearch />}
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      icon="S"
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      placeholder="Search"
      value={value}
    />
  )
}

export const Strict = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      strict
      value={value}
    />
  )
}

export const Filter = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      filter
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      value={value}
    />
  )
}

export const StrictFilter = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      filter
      onInput={handleInput}
      onOptionClick={handleOptionClick}
      options={options}
      strict
      value={value}
    />
  )
}

export const MenuTop = function () {
  const [value, setValue] = useState('')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  function handleOptionClick(event: JSX.TargetedMouseEvent<HTMLDivElement>) {
    const newValue = event.currentTarget.innerHTML
    console.log(newValue)
    setValue(newValue)
  }
  const style = { marginTop: '128px' }
  return (
    <div style={style}>
      <TextboxAutocomplete
        onInput={handleInput}
        onOptionClick={handleOptionClick}
        options={options}
        top
        value={value}
      />
    </div>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  return (
    <TextboxAutocomplete
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}
