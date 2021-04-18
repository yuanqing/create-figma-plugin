/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { spaceHorizontalIcon } from '../../icon/icons/space-horizontal-icon'
import { TEXTBOX_MIXED_VALUE } from '../utilities/textbox-mixed-value'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Textbox Numeric' }

export const Empty = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: null
  }
  const [state, setState] = useState(initialState)
  return <TextboxNumeric name="foo" onChange={setState} value={state.foo} />
}

export const Disabled = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: null
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric disabled name="foo" onChange={setState} value={state.foo} />
  )
}

export const WithPlaceholder = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: null
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric
      name="foo"
      onChange={setState}
      placeholder="Placeholder"
      value={state.foo}
    />
  )
}

export const Filled = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return <TextboxNumeric name="foo" onChange={setState} value={state.foo} />
}

export const FilledDisabled = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric disabled name="foo" onChange={setState} value={state.foo} />
  )
}

export const Mixed = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: TEXTBOX_MIXED_VALUE
  }
  const [state, setState] = useState(initialState)
  return <TextboxNumeric name="foo" onChange={setState} value={state.foo} />
}

export const NoBorder = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric name="foo" noBorder onChange={setState} value={state.foo} />
  )
}

export const WithIcon = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: null
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric
      icon={spaceHorizontalIcon}
      name="foo"
      onChange={setState}
      placeholder="Space"
      value={state.foo}
    />
  )
}

export const WithTextIcon = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: null
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric icon="X" name="foo" onChange={setState} value={state.foo} />
  )
}

export const Integer = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric integer name="foo" onChange={setState} value={state.foo} />
  )
}

export const CustomIncrements = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric
      incrementBig={20}
      incrementSmall={4}
      name="foo"
      onChange={setState}
      value={state.foo}
    />
  )
}

export const MinimumMaximum = function () {
  const initialState: { foo: null | typeof TEXTBOX_MIXED_VALUE | string } = {
    foo: '42'
  }
  const [state, setState] = useState(initialState)
  return (
    <TextboxNumeric
      maximum={100}
      minimum={0}
      name="foo"
      onChange={setState}
      value={state.foo}
    />
  )
}
