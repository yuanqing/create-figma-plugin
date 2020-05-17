/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { Inline } from './inline'

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

export const ExtraSmallSpace = function () {
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

export const SmallSpace = function () {
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

export const MediumSpace = function () {
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

export const LargeSpace = function () {
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

export const ExtraLargeSpace = function () {
  return (
    <Inline space='extraLarge'>
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
