/** @jsx h */
import type { ComponentChildren } from 'preact'
import { h } from 'preact'

import type { HTMLProps } from '../../types'
import style from './preview.css'

export interface PreviewProps {
  children: ComponentChildren
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
