/** @jsx h */
import { h } from 'preact'

import styles from './icon.scss'

export interface IconProps {
  children: string
}

export function Icon({ children }: IconProps): h.JSX.Element {
  /* eslint-disable react/no-unknown-property */
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d={children} />
    </svg>
  )
  /* eslint-enable react/no-unknown-property */
}
