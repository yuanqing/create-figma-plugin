/** @jsx h */
import { h } from 'preact'
import styles from './container.scss'

export function Container ({ space = 'small', ...rest }) {
  return <div {...rest} class={styles[space]} />
}
