/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { spaceHorizontalIcon } from '../../icon/icons/space-horizontal-icon'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Textbox Numeric' }

export const Empty = function () {
  const [state, setState] = useState({ foo: '' })
  return <TextboxNumeric name="foo" onChange={setState} value={state.foo} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: '' })
  return (
    <TextboxNumeric disabled name="foo" onChange={setState} value={state.foo} />
  )
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: '' })
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
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric name="foo" onChange={setState} value={`${state.foo}`} />
  )
}

export const FilledDisabled = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      disabled
      name="foo"
      onChange={setState}
      value={`${state.foo}`}
    />
  )
}

export const Mixed = function () {
  const [state, setState] = useState({ foo: null })
  return <TextboxNumeric name="foo" onChange={setState} value={state.foo} />
}

export const NoBorder = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      name="foo"
      noBorder
      onChange={setState}
      value={`${state.foo}`}
    />
  )
}

export const WithIcon = function () {
  const [state, setState] = useState({ foo: '' })
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
  const [state, setState] = useState({ foo: '' })
  return (
    <TextboxNumeric icon="X" name="foo" onChange={setState} value={state.foo} />
  )
}

export const Integer = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      integer
      name="foo"
      onChange={setState}
      value={`${state.foo}`}
    />
  )
}

export const CustomIncrements = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      incrementBig={20}
      incrementSmall={4}
      name="foo"
      onChange={setState}
      value={`${state.foo}`}
    />
  )
}

export const MinimumMaximum = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      maximum={100}
      minimum={0}
      name="foo"
      onChange={setState}
      value={`${state.foo}`}
    />
  )
}
