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
      className={classnames(
        styles.text,
        styles[align],
        bold === true ? styles.isBold : null,
        muted === true ? styles.isMuted : null,
        numeric === true ? styles.isNumeric : null
      )}
    >
      {children}
    </div>
  )
}
