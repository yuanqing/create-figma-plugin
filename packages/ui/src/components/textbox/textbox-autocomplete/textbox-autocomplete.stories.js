/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxAutocomplete } from './textbox-autocomplete'
import { searchIcon } from '../../../icons/search-icon'

export default { title: 'Textbox Autocomplete' }

const options = [
  { value: 'foo' },
  { value: 'bar' },
  { value: 'baz' },
  { separator: true },
  { header: 'Header' },
  { value: 'qux' },
  { value: 'quux' },
  { value: 'quuux' },
  { value: 'quuuux' },
  { value: 'quuuuux' }
]

export const Empty = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      disabled
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'baz' })
  return (
    <TextboxAutocomplete
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const FilledDisabled = function () {
  const [state, setState] = useState({ foo: 'baz' })
  return (
    <TextboxAutocomplete
      disabled
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const NoBorder = function () {
  const [state, setState] = useState({ foo: 'baz' })
  return (
    <TextboxAutocomplete
      noBorder
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const WithIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      icon={searchIcon}
      placeholder='Search'
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const WithTextIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      icon='S'
      placeholder='Search'
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const Strict = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      strict
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const Filter = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      filter
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const FilterStrict = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxAutocomplete
      filter
      strict
      name='foo'
      value={state.foo}
      options={options}
      onChange={setState}
    />
  )
}

export const MenuTop = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <div
      style={{
        marginTop: '128px'
      }}
    >
      <TextboxAutocomplete
        top
        name='foo'
        value={state.foo}
        options={options}
        onChange={setState}
      />
    </div>
  )
}
