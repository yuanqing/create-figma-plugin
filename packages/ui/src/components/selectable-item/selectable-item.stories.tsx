/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SelectableItem } from './selectable-item'

export default { title: 'Selectable Item' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Default = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState}>
      Text
    </SelectableItem>
  )
}

export const Selected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState}>
      Text
    </SelectableItem>
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState} disabled>
      Text
    </SelectableItem>
  )
}

export const DisabledSelected = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState} disabled>
      Text
    </SelectableItem>
  )
}

export const Bold = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState} bold>
      Text
    </SelectableItem>
  )
}

export const Indent = function () {
  const [state, setState] = useState({ foo: false })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState} indent>
      Text
    </SelectableItem>
  )
}

export const LongText = function () {
  const [state, setState] = useState({ foo: true })
  return (
    <SelectableItem name='foo' value={state.foo} onChange={setState}>
      {longText}
    </SelectableItem>
  )
}
