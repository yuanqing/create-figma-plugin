/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { Stack } from './stack'

export default { title: 'Stack' }

const style = {
  backgroundColor: '#daebf7'
}

export const ExtraSmallSpace = function () {
  return (
    <Stack space="extraSmall">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export const SmallSpace = function () {
  return (
    <Stack space="small">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export const MediumSpace = function () {
  return (
    <Stack space="medium">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export const LargeSpace = function () {
  return (
    <Stack space="large">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}

export const ExtraLargeSpace = function () {
  return (
    <Stack space="extraLarge">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Stack>
  )
}
