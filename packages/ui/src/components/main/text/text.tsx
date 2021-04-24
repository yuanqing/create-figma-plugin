/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../../types'
import styles from './text.css'

export type TextAlignment = 'left' | 'center' | 'right'
export interface TextProps {
  children: ComponentChildren
  align?: TextAlignment
  bold?: boolean
  muted?: boolean
  numeric?: boolean
}

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
      class={classnames(
        styles.text,
        styles[align],
        bold === true ? styles.bold : null,
        muted === true ? styles.muted : null,
        numeric === true ? styles.numeric : null
      )}
    >
      {children}
    </div>
  )
}
