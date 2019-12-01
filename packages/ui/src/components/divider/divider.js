/** @jsx h */
import { h } from 'preact'
import styles from './divider.scss'

export function Divider (props) {
  return <hr {...props} class={styles.divider} />
}
