/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SegmentedControl } from './segmented-control'

export default { title: 'Segmented Control' }

export const Default = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <SegmentedControl<null | string, 'foo'>
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const Disabled = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <SegmentedControl<null | string, 'foo'>
      disabled
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const WithSelectedOption = function () {
  const initialState: { foo: null | string } = { foo: 'bar' }
  const [state, setState] = useState(initialState)
  return (
    <SegmentedControl<null | string, 'foo'>
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const WithDisabledOption = function () {
  const initialState: { foo: null | string } = { foo: null }
  const [state, setState] = useState(initialState)
  return (
    <SegmentedControl<null | string, 'foo'>
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo' },
        { disabled: true, value: 'bar' },
        { value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledSelectedOption = function () {
  const initialState: { foo: null | string } = { foo: 'bar' }
  const [state, setState] = useState(initialState)
  return (
    <SegmentedControl<null | string, 'foo'>
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo' },
        { disabled: true, value: 'bar' },
        { value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}
