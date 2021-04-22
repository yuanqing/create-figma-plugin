/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { IconSearch } from '../../icon/icon-search/icon-search'
import { Textbox } from './textbox'
import { MIXED_STRING } from './utilities/mixed-constants'

export default { title: 'Components/Form/Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  return <Textbox onChange={setValue} value={value} />
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  return <Textbox onChange={setValue} placeholder="Placeholder" value={value} />
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox onChange={setValue} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox disabled onChange={setValue} value={value} />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  return <Textbox noBorder onChange={setValue} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('Text')
  return <Textbox icon={<IconSearch />} onChange={setValue} value={value} />
}

export const TextIcon = function () {
  const [value, setValue] = useState('Text')
  return <Textbox icon="X" onChange={setValue} value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  return <Textbox onChange={setValue} value={value} />
}
