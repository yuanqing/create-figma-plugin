/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../../types/types'
import styles from './vertical-space.css'

export type VerticalSpaceProps = {
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
