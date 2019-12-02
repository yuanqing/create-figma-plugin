/** @jsx h */
import { h } from 'preact'
import { Columns } from './columns'
import { Text } from '../text/text'

export default { title: 'Columns' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export function NoSpace () {
  return (
    <Columns>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export function ExtraSmall () {
  return (
    <Columns space='extraSmall'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export function Small () {
  return (
    <Columns space='small'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export function Medium () {
  return (
    <Columns space='medium'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export function Large () {
  return (
    <Columns space='large'>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}
