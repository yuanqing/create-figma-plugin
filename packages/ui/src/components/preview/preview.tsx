/** @jsx h */
import type { ComponentChildren } from 'preact'
import { h } from 'preact'

import type { Props } from '../../types'
import style from './preview.css'

export interface PreviewProps {
  children: ComponentChildren
}

export function Preview({
  children,
  ...rest
}: Props<PreviewProps, HTMLDivElement>): h.JSX.Element {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
