/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { searchIcon } from '../../icon/icons/search-icon'
import {
  TextboxAutocomplete,
  TextboxAutocompleteOption
} from './textbox-autocomplete'

export default { title: 'Textbox Autocomplete' }

const options: TextboxAutocompleteOption[] = [
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
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const Disabled = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      disabled
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const WithPlaceholder = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      name="foo"
      onChange={setState}
      options={options}
      placeholder="Placeholder"
      value={state.foo}
    />
  )
}

export const Filled = function () {
  const initialState: { foo: null | string } = { foo: 'baz' }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const FilledDisabled = function () {
  const initialState: { foo: null | string } = { foo: 'baz' }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      disabled
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const NoBorder = function () {
  const initialState: { foo: null | string } = { foo: 'baz' }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      name="foo"
      noBorder
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const WithIcon = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      icon={searchIcon}
      name="foo"
      onChange={setState}
      options={options}
      placeholder="Search"
      value={state.foo}
    />
  )
}

export const WithTextIcon = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      icon="S"
      name="foo"
      onChange={setState}
      options={options}
      placeholder="Search"
      value={state.foo}
    />
  )
}

export const Strict = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      name="foo"
      onChange={setState}
      options={options}
      strict
      value={state.foo}
    />
  )
}

export const Filter = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      filter
      name="foo"
      onChange={setState}
      options={options}
      value={state.foo}
    />
  )
}

export const FilterStrict = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <TextboxAutocomplete
      filter
      name="foo"
      onChange={setState}
      options={options}
      strict
      value={state.foo}
    />
  )
}

export const MenuTop = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <div
      style={{
        marginTop: '128px'
      }}
    >
      <TextboxAutocomplete
        name="foo"
        onChange={setState}
        options={options}
        top
        value={state.foo}
      />
    </div>
  )
}
