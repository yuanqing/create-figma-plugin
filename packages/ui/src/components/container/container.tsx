/** @jsx h */
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'

import type { Props, Space } from '../../types'
import styles from './container.css'

export interface ContainerProps {
  children: ComponentChildren
  space?: Space
}

export function Container({
  space = 'small',
  ...rest
}: Props<HTMLDivElement, ContainerProps>): JSX.Element {
  return <div {...rest} class={styles[space]} />
}
