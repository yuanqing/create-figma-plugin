/** @jsx h */
import { h } from 'preact'
import styles from './icon.scss'

export interface IconProps {
  children: string,
}

export function Icon ({ children } : IconProps) {
  return (
    <svg class={styles.icon}>
      <path fill-rule='evenodd' clip-rule='evenodd' d={children} />
    </svg>
  )
}
