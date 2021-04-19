/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SearchTextbox } from './search-textbox'

export default { title: 'ui/Form/Search Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  return <SearchTextbox onChange={setValue} value={value} />
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  return (
    <SearchTextbox
      onChange={setValue}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox onChange={setValue} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox disabled onChange={setValue} value={value} />
}
