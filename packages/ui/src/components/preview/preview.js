/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import style from './preview.scss'

export function Preview ({ children, ...rest }) {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
