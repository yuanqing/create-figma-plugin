import { h, JSX } from 'preact'

import { Props } from '../../types/types.js'
import styles from './vertical-space.module.css'

export type VerticalSpaceProps = {
  space: VerticalSpaceSpace
}
export type VerticalSpaceSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function VerticalSpace({
  space,
  ...rest
}: Props<HTMLDivElement, VerticalSpaceProps>): JSX.Element {
  return <div {...rest} class={styles[space]} />
}
