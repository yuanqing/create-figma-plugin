/** @jsx h */
import { h } from 'preact'

import { Stack } from './stack'

export default { title: 'Components/Layout/Stack' }

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Stack space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Stack space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Stack space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Stack space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Stack space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}
