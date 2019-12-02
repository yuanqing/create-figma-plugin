/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({ space = 'small', ...rest }) {
  return <div {...rest} class={styles[space]} />
}
