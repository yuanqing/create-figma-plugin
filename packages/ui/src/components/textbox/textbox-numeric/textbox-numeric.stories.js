/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxNumeric } from './textbox-numeric'
import { spaceHorizontalIcon } from '../../../icons/space-horizontal-icon'

export default { title: 'Textbox Numeric' }

export const Empty = function () {
  const [state, setState] = useState({ foo: null })
  return <TextboxNumeric name='foo' value={state.foo} onChange={setState} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxNumeric disabled name='foo' value={state.foo} onChange={setState} />
  )
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxNumeric
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 42 })
  return <TextboxNumeric name='foo' value={state.foo} onChange={setState} />
}

export const FilledDisabled = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric disabled name='foo' value={state.foo} onChange={setState} />
  )
}

export const Mixed = function () {
  const [state, setState] = useState({ foo: null })
  return <TextboxNumeric name='foo' value={state.foo} onChange={setState} />
}

export const NoBorder = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric noBorder name='foo' value={state.foo} onChange={setState} />
  )
}

export const WithIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxNumeric
      icon={spaceHorizontalIcon}
      placeholder='Space'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}

export const WithTextIcon = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <TextboxNumeric
      icon='S'
      placeholder='Space'
      name='foo'
      value={state.foo}
      onChange={setState}
    />
  )
}

export const Integer = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      integer
      onChange={setState}
    />
  )
}

export const CustomIncrements = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      smallIncrement={4}
      bigIncrement={20}
      onChange={setState}
    />
  )
}

export const MinimumMaximum = function () {
  const [state, setState] = useState({ foo: 42 })
  return (
    <TextboxNumeric
      placeholder='Placeholder'
      name='foo'
      value={state.foo}
      minimum={0}
      maximum={100}
      onChange={setState}
    />
  )
}
