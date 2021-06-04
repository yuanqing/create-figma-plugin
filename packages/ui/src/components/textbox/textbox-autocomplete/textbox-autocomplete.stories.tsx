/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../../icon/icon-16/icon-layer-frame-16'
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
  return (
    <TextboxAutocomplete
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      {...useInitialFocus()}
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      options={options}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('qux')
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
  return (
    <TextboxAutocomplete
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      disabled
      onInput={handleInput}
      options={options}
      value="foo"
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('Mixed')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { disabled: true, value: 'Mixed' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      options={options}
      value={value}
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
  return (
    <TextboxAutocomplete
      noBorder
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      icon="X"
      onInput={handleInput}
      options={options}
      value={value}
    />
  )
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState('qux')
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
  return (
    <TextboxAutocomplete
      onInput={handleInput}
      options={options}
      revertOnEscapeKeyDown
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
  return (
    <TextboxAutocomplete
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      filter
      onInput={handleInput}
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
  return (
    <TextboxAutocomplete
      filter
      onInput={handleInput}
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <TextboxAutocomplete
        onInput={handleInput}
        options={options}
        top
        value={value}
      />
    </div>
  )
}

export const OnValueInput = function () {
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
      onValueInput={setValue}
      options={options}
      value={value}
    />
  )
}
