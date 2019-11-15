/** @jsx h */
import { h } from 'preact'
import { Text } from './text'

export default { title: 'Text' }

export function Normal () {
  return <Text>Text</Text>
}

export function Bold () {
  return (
    <Text>
      <strong>Text</strong>
    </Text>
  )
}

export function Muted () {
  return <Text muted>Text</Text>
}

export function MutedBold () {
  return (
    <Text muted>
      <strong>Text</strong>
    </Text>
  )
}

export function Paragraph () {
  return (
    <Text>
      <p>foo</p>
      <p>bar</p>
      <p>baz</p>
    </Text>
  )
}
