/** @jsx h */
import { h } from 'preact'
import { SelectableItem } from './selectable-item'

export default { title: 'Selectable Item' }

const icon = (
  <svg>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M5.74851 11.2485L8 13.5L10.2515 11.2485L8 8.99703L5.74851 11.2485ZM7.00298 8.00001L4.75149 5.74851L2.5 8L4.75149 10.2515L7.00298 8.00001ZM8.99702 8.00001L11.2485 10.2515L13.5 8L11.2485 5.74851L8.99702 8.00001ZM10.2515 4.75149L8 7.00299L5.74851 4.75149L8 2.5L10.2515 4.75149Z'
    />
  </svg>
)

export const Normal = function () {
  return <SelectableItem>Text</SelectableItem>
}

export const Selected = function () {
  return <SelectableItem selected>Text</SelectableItem>
}

export const Bold = function () {
  return <SelectableItem bold>Text</SelectableItem>
}

export const WithIcon = function () {
  return (
    <SelectableItem bold icon={icon}>
      Text
    </SelectableItem>
  )
}
