/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { searchIcon } from '../icon/icons/search-icon'
import { Textbox } from './textbox'
import { TEXTBOX_MIXED_VALUE } from './utilities/textbox-mixed-value'

export default { title: 'Textbox' }

export const Empty = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: ''
  }
  const [state, setState] = useState(initialState)
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const Disabled = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: ''
  }
  const [state, setState] = useState(initialState)
  return <Textbox disabled name="foo" onChange={setState} value={state.foo} />
}

export const WithPlaceholder = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: ''
  }
  const [state, setState] = useState(initialState)
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
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: 'Text'
  }
  const [state, setState] = useState(initialState)
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const FilledDisabled = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: 'Text'
  }
  const [state, setState] = useState(initialState)
  return <Textbox disabled name="foo" onChange={setState} value={state.foo} />
}

export const Mixed = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: TEXTBOX_MIXED_VALUE
  }
  const [state, setState] = useState(initialState)
  return <Textbox name="foo" onChange={setState} value={state.foo} />
}

export const NoBorder = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: 'Text'
  }
  const [state, setState] = useState(initialState)
  return <Textbox name="foo" noBorder onChange={setState} value={state.foo} />
}

export const Password = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: 'password'
  }
  const [state, setState] = useState(initialState)
  return (
    <Textbox
      name="foo"
      noBorder
      onChange={setState}
      type="password"
      value={state.foo}
    />
  )
}

export const WithIcon = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: ''
  }
  const [state, setState] = useState(initialState)
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
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: ''
  }
  const [state, setState] = useState(initialState)
  return <Textbox icon="X" name="foo" onChange={setState} value={state.foo} />
}
