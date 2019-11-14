/** @jsx h */
import { h } from 'preact'
import styles from './header.scss'

export function Header (props) {
  return <h1 {...props} class={styles.header} />
}
