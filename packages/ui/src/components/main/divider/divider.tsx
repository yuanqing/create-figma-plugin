/** @jsx h */
import type { JSX } from 'preact'
import { h } from 'preact'

import type { Props } from '../../../types'
import styles from './divider.css'

export type DividerProps = Props<HTMLHRElement>

export function Divider(props: Props<HTMLHRElement>): JSX.Element {
  return <hr {...props} class={styles.divider} />
}
