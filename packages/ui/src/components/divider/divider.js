/** @jsx h */
import { h } from 'preact'
import styles from './divider.scss'

export function Divider ({ style, ...rest }) {
  return <hr {...rest} class={styles.divider} style={style} />
}
