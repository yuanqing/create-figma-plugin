/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { Alignment, Space } from '../../types'
import styles from './text.scss'

export interface TextProps {
  children: React.ReactNode,
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
} : TextProps) {
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
