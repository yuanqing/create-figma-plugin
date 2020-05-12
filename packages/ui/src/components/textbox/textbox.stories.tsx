/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Textbox } from './textbox'
import { searchIcon } from '../icon/icons/search-icon'

export default { title: 'Textbox' }

export const Empty = function () {
  const [state, setState] = useState({ foo: null })
  return <Textbox name='foo' value={state.foo} onChange={setState} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return <Textbox disabled name='foo' value={state.foo} onChange={setState} />
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <Textbox
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox name='foo' value={state.foo} onChange={setState} />
}

export const FilledDisabled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox disabled name='foo' value={state.foo} onChange={setState} />
}

export const Mixed = function () {
  const [state, setState] = useState({ foo: null })
  return <Textbox name='foo' value={state.foo} onChange={setState} />
}

export const NoBorder = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <Textbox noBorder name='foo' value={state.foo} onChange={setState} />
}

export const WithIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <Textbox
      icon={searchIcon}
      placeholder='Search'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}

export const WithTextIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <Textbox
      icon='S'
      placeholder='Search'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}
