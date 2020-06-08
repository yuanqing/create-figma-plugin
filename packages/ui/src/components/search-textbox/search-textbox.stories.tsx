/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SearchTextbox } from './search-textbox'

export default { title: 'Search Textbox' }

export const Empty = function () {
  const [state, setState] = useState({ foo: '' })
  return <SearchTextbox name="foo" onChange={setState} value={state.foo} />
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: '' })
  return (
    <SearchTextbox
      name="foo"
      onChange={setState}
      placeholder="Placeholder"
      value={state.foo}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <SearchTextbox name="foo" onChange={setState} value={state.foo} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return (
    <SearchTextbox disabled name="foo" onChange={setState} value={state.foo} />
  )
}
