/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../../hooks/use-initial-focus'
import { IconSearch } from '../../../icon/icon-search/icon-search'
import {
  TextboxAutocomplete,
  TextboxAutocompleteOption
} from './textbox-autocomplete'

export default { title: 'Components/Form/Textbox Autocomplete' }

export const Empty = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const Focused = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      {...useInitialFocus()}
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      onValueChange={setValue}
      options={options}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('foo')
  return (
    <TextboxAutocomplete
      onValueChange={setValue}
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
  const [value, setValue] = useState('foo')
  return (
    <TextboxAutocomplete
      disabled
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const NoBorder = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('foo')
  return (
    <TextboxAutocomplete
      noBorder
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const Icon = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('foo')
  return (
    <TextboxAutocomplete
      icon={<IconSearch />}
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const TextIcon = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('foo')
  return (
    <TextboxAutocomplete
      icon="S"
      onValueChange={setValue}
      options={options}
      placeholder="Search"
      value={value}
    />
  )
}

export const Strict = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      onValueChange={setValue}
      options={options}
      strict
      value={value}
    />
  )
}

export const Filter = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      filter
      onValueChange={setValue}
      options={options}
      value={value}
    />
  )
}

export const MenuTop = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const style = { marginTop: '128px' }
  const [value, setValue] = useState('')
  return (
    <div style={style}>
      <TextboxAutocomplete
        onValueChange={setValue}
        options={options}
        top
        value={value}
      />
    </div>
  )
}
