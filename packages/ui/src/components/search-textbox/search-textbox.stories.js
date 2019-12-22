/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { SearchTextbox } from './search-textbox'

export default { title: 'Search Textbox' }

export const Text = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox value={value} onChange={setValue} />
}

export const WithPlaceholder = function () {
  const [value, setValue] = useState('')
  return <SearchTextbox placeholder='Text' value={value} onChange={setValue} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <SearchTextbox disabled value={value} onChange={setValue} />
}
