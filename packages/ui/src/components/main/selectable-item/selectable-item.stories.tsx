/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { SelectableItem } from './selectable-item'

export default { title: 'Components/Main/Selectable Item' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  return (
    <SelectableItem onChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  return (
    <SelectableItem onChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(true)
  return (
    <SelectableItem disabled onChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}

export const Bold = function () {
  const [value, setValue] = useState(true)
  return (
    <SelectableItem bold onChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}

export const Indent = function () {
  const [value, setValue] = useState(true)
  return (
    <SelectableItem indent onChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState(true)
  return (
    <SelectableItem onChange={setValue} value={value}>
      {longText}
    </SelectableItem>
  )
}
