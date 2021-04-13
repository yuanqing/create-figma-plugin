/** @jsx h */
import type { ComponentChildren } from 'preact'
import { h } from 'preact'

import type { HTMLProps, Space } from '../../types'
import styles from './container.css'

export interface ContainerProps {
  children: ComponentChildren
  space?: Space
}

export function Container({
  space = 'small',
  ...rest
}: HTMLProps<ContainerProps, HTMLDivElement>): h.JSX.Element {
  return <div {...rest} class={styles[space]} />
}
