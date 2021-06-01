/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './text.css'

export type TextProps = {
  children: ComponentChildren
  align?: TextAlignment
  bold?: boolean
  muted?: boolean
  numeric?: boolean
}
export type TextAlignment = 'left' | 'center' | 'right'

export function Text({
  align = 'left',
  bold = false,
  children,
  muted = false,
  numeric = false,
  ...rest
}: Props<HTMLDivElement, TextProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.text,
        styles[align],
        bold === true ? styles.bold : null,
        muted === true ? styles.muted : null,
        numeric === true ? styles.numeric : null
      ])}
    >
      {children}
    </div>
  )
}
