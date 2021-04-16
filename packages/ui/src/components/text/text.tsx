/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren } from 'preact'
import { h } from 'preact'

import type { Alignment, Props } from '../../types'
import styles from './text.css'

export interface TextProps {
  children: ComponentChildren
  align?: Alignment
  bold?: boolean
  muted?: boolean
  numeric?: boolean
}

export function Text({
  align = 'left',
  bold,
  children,
  muted,
  numeric,
  ...rest
}: Props<TextProps, HTMLDivElement>): h.JSX.Element {
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
