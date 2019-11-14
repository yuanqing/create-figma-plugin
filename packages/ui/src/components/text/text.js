/** @jsx h */
import { h } from 'preact'
import styles from './text.scss'

export function Text ({ muted, ...rest }) {
  return <div {...rest} class={styles[muted === true ? 'muted' : 'text']} />
}
