/** @jsx h */
import { h } from 'preact'
import { VerticalSpace } from './vertical-space'

export default { title: 'Vertical Space' }

const style = {
  backgroundColor: 'rgba(255, 0, 0, 0.2)'
}

export function Small () {
  return <VerticalSpace small style={style} />
}

export function ExtraSmall () {
  return <VerticalSpace extraSmall style={style} />
}

export function Medium () {
  return <VerticalSpace style={style} />
}

export function Large () {
  return <VerticalSpace large style={style} />
}

export function ExtraLarge () {
  return <VerticalSpace extraLarge style={style} />
}
