/** @jsx h */
import { h } from 'preact'
import { VerticalSpace } from './vertical-space'

export default { title: 'Vertical Space' }

const style = {
  backgroundColor: 'rgba(0, 0, 255, 0.2)'
}

export function ExtraSmall () {
  return (
    <div style={style}>
      <VerticalSpace extraSmall />
    </div>
  )
}

export function Small () {
  return (
    <div style={style}>
      <VerticalSpace small />
    </div>
  )
}

export function Medium () {
  return (
    <div style={style}>
      <VerticalSpace medium />
    </div>
  )
}

export function Large () {
  return (
    <div style={style}>
      <VerticalSpace large />
    </div>
  )
}
