/** @jsx h */
import { h } from 'preact'
import { VerticalSpace } from './vertical-space'

export default { title: 'Vertical Space' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export const ExtraSmall = function () {
  return (
    <div style={style}>
      <VerticalSpace space='extraSmall' />
    </div>
  )
}

export const Small = function () {
  return (
    <div style={style}>
      <VerticalSpace space='small' />
    </div>
  )
}

export const Medium = function () {
  return (
    <div style={style}>
      <VerticalSpace space='medium' />
    </div>
  )
}

export const Large = function () {
  return (
    <div style={style}>
      <VerticalSpace space='large' />
    </div>
  )
}
