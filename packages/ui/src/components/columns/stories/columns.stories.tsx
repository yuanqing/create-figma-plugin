/** @jsx h */
import { h } from 'preact'

import { Columns } from '../columns'

export default { title: 'Components/Columns' }

export const NoSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns>
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <Columns space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Columns>
  )
}
