/** @jsx h */
import { h } from 'preact'

import { VerticalSpace } from './vertical-space'

export default { title: 'Vertical Space' }

const style = {
  backgroundColor: '#daebf7'
}

export const ExtraSmallSpace = function () {
  return (
    <div style={style}>
      <VerticalSpace space="extraSmall" />
    </div>
  )
}

export const SmallSpace = function () {
  return (
    <div style={style}>
      <VerticalSpace space="small" />
    </div>
  )
}

export const MediumSpace = function () {
  return (
    <div style={style}>
      <VerticalSpace space="medium" />
    </div>
  )
}

export const LargeSpace = function () {
  return (
    <div style={style}>
      <VerticalSpace space="large" />
    </div>
  )
}

export const ExtraLargeSpace = function () {
  return (
    <div style={style}>
      <VerticalSpace space="extraLarge" />
    </div>
  )
}
