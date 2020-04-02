/** @jsx h */
import { h } from 'preact'
import styles from './icon.scss'

export function Icon ({ children }) {
  return (
    <svg class={styles.icon}>
      <path fill-rule='evenodd' clip-rule='evenodd' d={children} />
    </svg>
  )
}
