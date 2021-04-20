/** @jsx h */
import type { JSX } from 'preact'
import { h } from 'preact'

import type { Props } from '../../types'
import styles from './icon.css'

export type IconProps = Props<SVGSVGElement>

export function createIcon(path: string) {
  return function Icon(props: IconProps): JSX.Element {
    return (
      <svg {...props} class={styles.icon} xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d={path} fill-rule="evenodd" />
      </svg>
    )
  }
}
