/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SegmentedControl } from './segmented-control'

export default { title: 'Segmented Control' }

export const Default = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <SegmentedControl
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <SegmentedControl
      disabled
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const WithSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <SegmentedControl
      name="foo"
      onChange={setState}
      options={[{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]}
      value={state.foo}
    />
  )
}

export const WithDisabledOption = function () {
  const [state, setState] = useState({ foo: null })
  return (
    <SegmentedControl
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo' },
        { value: 'bar', disabled: true },
        { value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}

export const WithDisabledSelectedOption = function () {
  const [state, setState] = useState({ foo: 'bar' })
  return (
    <SegmentedControl
      name="foo"
      onChange={setState}
      options={[
        { value: 'foo' },
        { value: 'bar', disabled: true },
        { value: 'baz' }
      ]}
      value={state.foo}
    />
  )
}
