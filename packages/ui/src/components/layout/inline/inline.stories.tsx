/** @jsx h */
import { h } from 'preact'

import { Inline } from './inline'

export default { title: 'Components/Layout/Inline' }

export const NoSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline>
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const ExtraSmallSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline space="extraSmall">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const SmallSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline space="small">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const MediumSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline space="medium">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const LargeSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline space="large">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}

export const ExtraLargeSpace = function () {
  const style = { backgroundColor: '#daebf7' }
  return (
    <Inline space="extraLarge">
      <div style={style}>foo</div>
      <div style={style}>bar</div>
      <div style={style}>baz</div>
    </Inline>
  )
}
