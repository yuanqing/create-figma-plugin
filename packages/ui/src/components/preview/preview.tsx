/** @jsx h */
import { h } from 'preact'
import style from './preview.scss'

export interface PreviewProps {
  children: React.ReactNode
}

export function Preview ({ children, ...rest } : PreviewProps) {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
