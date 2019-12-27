/** @jsx h */
import { h } from 'preact'
import { SelectableItem } from './selectable-item'

export default { title: 'Selectable Item' }

const longText = Array(100)
  .fill('Text')
  .join(' ')

export const Default = function () {
  return <SelectableItem>Text</SelectableItem>
}

export const Selected = function () {
  return <SelectableItem selected>Text</SelectableItem>
}

export const LongText = function () {
  return <SelectableItem>{longText}</SelectableItem>
}
