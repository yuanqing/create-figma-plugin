/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { iconSearch } from '../../icon/icon-search/icon-search'
import { Textbox } from './textbox'

export default { title: 'ui/Form/Textbox' }

export const Empty = function () {
  const [value, setValue] = useState<null | string>('')
  return <Textbox onChange={setValue} value={value} />
}

export const Placeholder = function () {
  const [value, setValue] = useState<null | string>('')
  return <Textbox onChange={setValue} placeholder="Placeholder" value={value} />
}

export const Filled = function () {
  const [value, setValue] = useState<null | string>('Text')
  return <Textbox onChange={setValue} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState<null | string>('Text')
  return <Textbox disabled onChange={setValue} value={value} />
}

export const NoBorder = function () {
  const [value, setValue] = useState<null | string>('Text')
  return <Textbox noBorder onChange={setValue} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState<null | string>('Text')
  return <Textbox icon={iconSearch} onChange={setValue} value={value} />
}

export const TextIcon = function () {
  const [value, setValue] = useState<null | string>('Text')
  return <Textbox icon="X" onChange={setValue} value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState<null | string>(null)
  return <Textbox onChange={setValue} value={value} />
}
