/** @jsx h */
import { h } from 'preact'
import { Text } from './text'

export default { title: 'Text' }

export function Normal () {
  return <Text>Text</Text>
}

export function Muted () {
  return <Text muted>Text</Text>
}
