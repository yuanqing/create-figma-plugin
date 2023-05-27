import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types.js'
import styles from './container.module.css'

export type ContainerProps = {
  children: ComponentChildren
  space: ContainerSpace
}
export type ContainerSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function Container({
  space,
  ...rest
}: Props<HTMLDivElement, ContainerProps>): JSX.Element {
  return <div {...rest} class={styles[space]} />
}
