/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './container.scss'

export function Container ({ space = 'small', ...rest }) {
  return <div {...rest} class={styles[space]} />
}
