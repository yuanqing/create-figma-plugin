import { ComponentChild, ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Props } from '../../types/types'
import styles from './stack.module.css'

export type StackProps = {
  children: ComponentChildren
  space: StackSpace
}
export type StackSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function Stack({
  children,
  space,
  ...rest
}: Props<HTMLDivElement, StackProps>): JSX.Element {
  return (
    <div {...rest} class={styles[space]}>
      {toChildArray(children).map(function (
        element: ComponentChild,
        index: number
      ): JSX.Element {
        return (
          <div key={index} class={styles.child}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
