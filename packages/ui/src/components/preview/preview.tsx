/** @jsx h */
import { h } from 'preact'
import style from './preview.scss'

export interface PreviewProps {
  children: preact.ComponentChildren
}

export function Preview ({ children, ...rest } : PreviewProps) : h.JSX.Element {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
