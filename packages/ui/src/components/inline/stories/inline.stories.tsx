/** @jsx h */
import { h } from 'preact'

import { Inline } from '../inline'

export default { title: 'Layout/Inline' }

export const Default = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline>
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <Inline space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}
