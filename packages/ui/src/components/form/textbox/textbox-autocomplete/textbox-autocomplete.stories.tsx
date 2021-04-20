/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { IconSearch } from '../../../icon/icon-search/icon-search'
import {
  TextboxAutocomplete,
  TextboxAutocompleteOption
} from './textbox-autocomplete'

export default { title: 'ui/Form/Textbox Autocomplete' }

export const Empty = function () {
  const options: Array<TextboxAutocompleteOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  const [value, setValue] = useState<null | string>('')
  return (
    <TextboxAutocomplete onChange={setValue} options={options} value={value} />
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
  const [value, setValue] = useState<null | string>('')
  return (
    <TextboxAutocomplete
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('foo')
  return (
    <TextboxAutocomplete onChange={setValue} options={options} value={value} />
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
  const [value, setValue] = useState<null | string>('foo')
  return (
    <TextboxAutocomplete
      disabled
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('foo')
  return (
    <TextboxAutocomplete
      noBorder
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('foo')
  return (
    <TextboxAutocomplete
      icon={<IconSearch />}
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('foo')
  return (
    <TextboxAutocomplete
      icon="S"
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('')
  return (
    <TextboxAutocomplete
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('')
  return (
    <TextboxAutocomplete
      filter
      onChange={setValue}
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
  const [value, setValue] = useState<null | string>('')
  return (
    <div style={style}>
      <TextboxAutocomplete
        onChange={setValue}
        options={options}
        top
        value={value}
      />
    </div>
  )
}
