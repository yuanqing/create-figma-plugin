/** @jsx h */
import { h } from 'preact'
import styles from './container.scss'

export function Container ({ style, ...rest }) {
  return <div {...rest} class={styles.container} style={style} />
}
