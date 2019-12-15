/** @jsx h */
import { h } from 'preact'
import { Inline } from './inline'
import { Text } from '../text/text'

export default { title: 'Inline' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const NoSpace = function () {
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

export const ExtraSmall = function () {
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

export const Small = function () {
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

export const Medium = function () {
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

export const Large = function () {
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
