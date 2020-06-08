/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { searchIcon } from '../icon/icons/search-icon'
import { Textbox } from './textbox'

export default { title: 'Textbox' }

export const Empty = function () {
  const [state, setState] = useState({ foo: '' })
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: '' })
  return <Textbox disabled name="foo" onChange={setState} value={state.foo} />
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: '' })
  return (
    <Textbox
      name="foo"
      onChange={setState}
      placeholder="Search"
      value={state.foo}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const FilledDisabled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox disabled name="foo" onChange={setState} value={state.foo} />
}

export const Mixed = function () {
  const [state, setState] = useState({ foo: null })
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const NoBorder = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox name="foo" noBorder onChange={setState} value={state.foo} />
}

export const WithIcon = function () {
  const [state, setState] = useState({ foo: '' })
  return (
    <Textbox
      icon={searchIcon}
      name="foo"
      onChange={setState}
      placeholder="Search"
      value={state.foo}
    />
  )
}

export const WithTextIcon = function () {
  const [state, setState] = useState({ foo: '' })
  return <Textbox icon="X" name="foo" onChange={setState} value={state.foo} />
}
