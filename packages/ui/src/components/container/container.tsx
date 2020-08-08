/** @jsx h */
import { h } from 'preact'

import { HTMLProps, Space } from '../../types'
import styles from './container.scss'

export interface ContainerProps {
  children: preact.ComponentChildren
  space?: Space
}

export function Container({
  space = 'small',
  ...rest
}: HTMLProps<ContainerProps, HTMLDivElement>): h.JSX.Element {
  return <div {...rest} class={styles[space]} />
}
