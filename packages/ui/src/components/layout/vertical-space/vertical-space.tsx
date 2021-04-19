/** @jsx h */
import type { JSX } from 'preact'
import { h } from 'preact'

import type { Props } from '../../../types'
import styles from './vertical-space.css'

export interface VerticalSpaceProps {
  space?: VerticalSpaceSpace
}
export type VerticalSpaceSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function VerticalSpace({
  space = 'small',
  ...rest
}: Props<HTMLDivElement, VerticalSpaceProps>): JSX.Element {
  return <div {...rest} class={styles[space]} />
}
