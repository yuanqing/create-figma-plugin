/** @jsx h */
import { h } from 'preact'
import { VerticalSpace } from './vertical-space'

export default { title: 'Vertical Space' }

export function Small () {
  return <VerticalSpace size='small' />
}

export function Medium () {
  return <VerticalSpace size='medium' />
}

export function Large () {
  return <VerticalSpace size='large' />
}
