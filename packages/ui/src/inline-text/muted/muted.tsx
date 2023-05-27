import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types.js'
import styles from './muted.module.css'

export type MutedProps = {
  children: ComponentChildren
}

export function Muted({
  children,
  ...rest
}: Props<HTMLSpanElement, MutedProps>): JSX.Element {
  return (
    <span {...rest} class={styles.muted}>
      {children}
    </span>
  )
}
