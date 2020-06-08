/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'

import { Alignment } from '../../types'
import styles from './text.scss'

export interface TextProps {
  children: preact.ComponentChildren
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
}: TextProps): h.JSX.Element {
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
