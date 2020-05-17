/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { Alignment } from '../../types'
import styles from './text.scss'

export interface TextProps {
  children: preact.ComponentChildren,
  align?: Alignment,
  bold?: boolean,
  muted?: boolean,
  numeric?: boolean,
}

export function Text ({
  align = 'left',
  bold: isBold,
  children,
  muted: isMuted,
  numeric: isNumeric,
  ...rest
} : TextProps) : h.JSX.Element {
  return (
    <div
      {...rest}
      class={classnames(
        styles.text,
        styles[align],
        isBold === true ? styles.isBold : null,
        isMuted === true ? styles.isMuted : null,
        isNumeric === true ? styles.isNumeric : null
      )}
    >{children}</div>
  )
}
