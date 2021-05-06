/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../types'
import styles from './divider.css'

export function Divider(props: Props<HTMLHRElement>): JSX.Element {
  return <hr {...props} class={styles.divider} />
}
