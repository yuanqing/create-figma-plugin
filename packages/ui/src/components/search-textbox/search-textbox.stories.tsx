/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SearchTextbox } from './search-textbox'

export default { title: 'Search Textbox' }

export const Empty = function () {
  const [state, setState] = useState({ foo: '' })
  return <SearchTextbox name="foo" value={state.foo} onChange={setState} />
}

export const WithPlaceholder = function () {
  const [state, setState] = useState({ foo: '' })
  return (
    <SearchTextbox
      placeholder="Placeholder"
      name="foo"
      value={state.foo}
      onChange={setState}
    />
  )
}

export const Filled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return <SearchTextbox name="foo" value={state.foo} onChange={setState} />
}

export const Disabled = function () {
  const [state, setState] = useState({ foo: 'Text' })
  return (
    <SearchTextbox disabled name="foo" value={state.foo} onChange={setState} />
  )
}
