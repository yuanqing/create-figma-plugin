/** @jsx h */
import { h } from 'preact'

import { VerticalSpace } from '../vertical-space'

export default {
  title: 'Layout/Vertical Space'
}

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <VerticalSpace space="extraSmall" />
    </div>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <VerticalSpace space="small" />
    </div>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <VerticalSpace space="medium" />
    </div>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <VerticalSpace space="large" />
    </div>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <VerticalSpace space="extraLarge" />
    </div>
  )
}
