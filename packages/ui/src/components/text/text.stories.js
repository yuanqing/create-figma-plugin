/** @jsx h */
import { h } from 'preact'
import { Text } from './text'

export default { title: 'Text' }

export function Normal () {
  return <Text>Text</Text>
}

export function Bold () {
  return <Text bold>Text</Text>
}

export function Muted () {
  return <Text muted>Text</Text>
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
