/** @jsx h */
import { h } from 'preact'
import { Inline } from './inline'
import { Text } from '../text/text'

export default { title: 'Inline' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export function NoSpace () {
  return (
    <Inline>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Inline>
  )
}

export function ExtraSmall () {
  return (
    <Inline space='extraSmall'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Inline>
  )
}

export function Small () {
  return (
    <Inline space='small'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Inline>
  )
}

export function Medium () {
  return (
    <Inline space='medium'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Inline>
  )
}

export function Large () {
  return (
    <Inline space='large'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Inline>
  )
}
