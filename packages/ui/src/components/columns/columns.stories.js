/** @jsx h */
import { h } from 'preact'
import { Columns } from './columns'
import { Text } from '../text/text'

export default { title: 'Columns' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const NoSpace = function () {
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

export const ExtraSmall = function () {
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

export const Small = function () {
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

export const Medium = function () {
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

export const Large = function () {
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
