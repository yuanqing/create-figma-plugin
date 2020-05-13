/** @jsx h */
import { h } from 'preact'
import { Space } from '../../types'
import styles from './container.scss'

export interface ContainerProps {
  children: React.ReactNode,
  space?: Space
}

export function Container ({ space = 'small', ...rest } : ContainerProps) {
  return <div {...rest} class={styles[space]} />
}
