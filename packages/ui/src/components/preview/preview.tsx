/** @jsx h */
import { h } from 'preact'

import { HTMLProps } from '../../types'
import style from './preview.css'

export interface PreviewProps {
  children: preact.ComponentChildren
}

export function Preview({
  children,
  ...rest
}: HTMLProps<PreviewProps, HTMLDivElement>): h.JSX.Element {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
