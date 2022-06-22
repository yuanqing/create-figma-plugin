/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../../../../icons/icon-16/icon-layer-frame-16'
import {
  TextboxAutocomplete,
  TextboxAutocompleteOption
} from '../textbox-autocomplete'

export default {
  parameters: {
    fixedWidth: true,
    order: 3
  },
  title: 'Components/Textbox Autocomplete/Underline'
}

export const Empty = function () {
  const [value, setValue] = useState<string>('')
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
      variant="underline"
    />
  )
}

export const EmptyFocused = function () {
  const [value, setValue] = useState<string>('')
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
      variant="underline"
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<string>('')
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
      placeholder="placeholder"
      value={value}
      variant="underline"
    />
  )
}

export const PlaceholderFocused = function () {
  const [value, setValue] = useState<string>('')
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
      placeholder="placeholder"
      value={value}
      variant="underline"
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
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
      variant="underline"
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { disabled: true, value: 'bar' },
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
      variant="underline"
    />
  )
}

export const Icon = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const IconDisabled = function () {
  const [value, setValue] = useState<string>('foo')
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
      disabled
      icon={<IconLayerFrame16 />}
      onInput={handleInput}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const IconText = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const IconTextDisabled = function () {
  const [value, setValue] = useState<string>('foo')
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
      disabled
      icon="X"
      onInput={handleInput}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const RevertOnEscapeKeyDown = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const Strict = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const Filter = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const StrictFilter = function () {
  const [value, setValue] = useState<string>('foo')
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
      variant="underline"
    />
  )
}

export const MenuTop = function () {
  const [value, setValue] = useState<string>('foo')
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
      top
      value={value}
      variant="underline"
    />
  )
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <TextboxAutocomplete
      onValueInput={handleValueInput}
      options={options}
      value={value}
      variant="underline"
    />
  )
}
