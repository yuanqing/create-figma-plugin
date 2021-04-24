/** @jsx h */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { IconSearch } from '../../icon/icon-search/icon-search'
import { Textbox } from './textbox'

export default { title: 'Components/Form/Textbox' }

export const Empty = function () {
  const [value, setValue] = useState('')
  return <Textbox onValueChange={setValue} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState('')
  return (
    <Textbox {...useInitialFocus()} onValueChange={setValue} value={value} />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState('')
  return (
    <Textbox onValueChange={setValue} placeholder="Placeholder" value={value} />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox onValueChange={setValue} value={value} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox disabled onValueChange={setValue} value={value} />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  return <Textbox noBorder onValueChange={setValue} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState('Text')
  return (
    <Textbox icon={<IconSearch />} onValueChange={setValue} value={value} />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState('Text')
  return <Textbox icon="X" onValueChange={setValue} value={value} />
}

export const Mixed = function () {
  const [value, setValue] = useState(MIXED_STRING)
  return <Textbox onValueChange={setValue} value={value} />
}
