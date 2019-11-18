/** @jsx h */
import { h } from 'preact'
import styles from './header.scss'

export function Header ({ style, ...rest }) {
  return <h1 {...rest} class={styles.header} style={style} />
}
