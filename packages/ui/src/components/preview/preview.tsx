/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import style from './preview.css'

export type PreviewProps = {
  children: ComponentChildren
}

export function Preview({
  className,
  class: cssClass,
  children,
  ...rest
}: Props<HTMLDivElement, PreviewProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([className, cssClass, style.preview])}
    >
      {children}
    </div>
  )
}
