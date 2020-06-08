/** @jsx h */
import { h } from 'preact'

import styles from './icon.scss'

export interface IconProps {
  children: string
}

export function Icon({ children }: IconProps): h.JSX.Element {
  return (
    <svg class={styles.icon} xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d={children} fill-rule="evenodd" />
    </svg>
  )
}
