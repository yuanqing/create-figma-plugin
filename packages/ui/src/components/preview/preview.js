/** @jsx h */
import { h } from 'preact'
import style from './preview.scss'

export function Preview ({ children, ...rest }) {
  return (
    <div {...rest} class={style.preview}>
      <div class={style.inner}>{children}</div>
    </div>
  )
}
