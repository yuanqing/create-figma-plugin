/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import style from './preview.css'

export type PreviewProps = {
  children: ComponentChildren
}

export function Preview({
  children,
  ...rest
}: Props<HTMLDivElement, PreviewProps>): JSX.Element {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
