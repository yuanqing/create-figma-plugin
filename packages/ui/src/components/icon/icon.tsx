/** @jsx h */
import { h } from 'preact'

import styles from './icon.scss'

export interface IconProps {
  children: string
}

export function Icon({ children }: IconProps): h.JSX.Element {
  return (
    <svg className={styles.icon}>
      <path fillRule="evenodd" clipRule="evenodd" d={children} />
    </svg>
  )
}
