/** @jsx h */
import { h } from 'preact'
import { Space } from '../../types'
import styles from './container.scss'

export interface ContainerProps {
  children: preact.ComponentChildren,
  space?: Space
}

export function Container ({ space = 'small', ...rest } : ContainerProps) : h.JSX.Element {
  return <div {...rest} class={styles[space]} />
}
