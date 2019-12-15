/** @jsx h */
import { h } from 'preact'
import { Text } from './text'

export default { title: 'Text' }

export const Default = function () {
  return <Text>Text</Text>
}

export const Bold = function () {
  return <Text bold>Text</Text>
}

export const Muted = function () {
  return <Text muted>Text</Text>
}
