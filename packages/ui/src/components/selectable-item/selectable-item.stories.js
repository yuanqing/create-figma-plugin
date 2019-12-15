/** @jsx h */
import { h } from 'preact'
import { SelectableItem } from './selectable-item'

export default { title: 'Selectable Item' }

export const Default = function () {
  return <SelectableItem>Text</SelectableItem>
}

export const Selected = function () {
  return <SelectableItem selected>Text</SelectableItem>
}
