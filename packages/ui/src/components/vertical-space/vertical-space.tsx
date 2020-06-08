/** @jsx h */
import { h } from 'preact'

import { Space } from '../../types'
import styles from './vertical-space.scss'

export interface VerticalSpaceProps {
  space?: Space
}

export function VerticalSpace({
  space = 'small',
  ...rest
}: VerticalSpaceProps): h.JSX.Element {
  return <div {...rest} class={styles[space]} />
}
