/** @jsx h */
import { h } from 'preact'

import styles from './divider.css'

export function Divider(props: { [key: string]: any }): h.JSX.Element {
  return <hr {...props} class={styles.divider} />
}
