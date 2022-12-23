import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import styles from './code.module.css'

export type CodeProps = {
  children: ComponentChildren
}

export function Code({
  children,
  ...rest
}: Props<HTMLSpanElement, CodeProps>): JSX.Element {
  return (
    <code {...rest} class={styles.code}>
      {children}
    </code>
  )
}
