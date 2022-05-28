/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import styles from './bold.css'

export type BoldProps = {
  children: ComponentChildren
}

export function Bold({
  children,
  ...rest
}: Props<HTMLSpanElement, BoldProps>): JSX.Element {
  return (
    <strong {...rest} class={styles.bold}>
      {children}
    </strong>
  )
}
