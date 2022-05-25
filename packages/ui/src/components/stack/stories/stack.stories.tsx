/** @jsx h */
import { h } from 'preact'

import { Stack } from '../stack'

export default { title: 'Layout/Stack' }

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Stack space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Stack space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Stack space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Stack space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Stack space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Stack>
  )
}
