/** @jsx h */
import { h } from 'preact'

import styles from './divider.scss'

export function Divider(props: { [key: string]: any }): h.JSX.Element {
  return <hr {...props} class={styles.divider} />
}
