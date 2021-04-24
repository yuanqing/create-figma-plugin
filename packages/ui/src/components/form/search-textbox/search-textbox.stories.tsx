/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { SearchTextbox } from './search-textbox'

export default { title: 'Components/Form/Search Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  return <SearchTextbox onValueChange={setValue} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  return (
    <SearchTextbox
      {...useInitialFocus()}
      onValueChange={setValue}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  return (
    <SearchTextbox
      onValueChange={setValue}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox onValueChange={setValue} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox disabled onValueChange={setValue} value={value} />
}
