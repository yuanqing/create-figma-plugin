/** @jsx h */
import { h } from 'preact'
import styles from './text.scss'

export function Text ({ muted: isMuted, ...rest }) {
  return <div {...rest} class={styles[isMuted === true ? 'isMuted' : 'text']} />
}
