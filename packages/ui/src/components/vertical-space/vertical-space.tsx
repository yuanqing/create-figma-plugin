/** @jsx h */
import type { JSX } from 'preact'
import { h } from 'preact'

import type { Props, Space } from '../../types'
import styles from './vertical-space.css'

export interface VerticalSpaceProps {
  space?: Space
}

export function VerticalSpace({
  space = 'small',
  ...rest
}: Props<HTMLDivElement, VerticalSpaceProps>): JSX.Element {
  return <div {...rest} class={styles[space]} />
}
