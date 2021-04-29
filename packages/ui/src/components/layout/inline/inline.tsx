/** @jsx h */
import { ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Props } from '../../../types'
import styles from './inline.css'

export type InlineProps = {
  children: ComponentChildren
  space?: InlineSpace
}
export type InlineSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function Inline({
  children,
  space,
  ...rest
}: Props<HTMLDivElement, InlineProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={typeof space === 'undefined' ? undefined : styles[space]}
    >
      {toChildArray(children).map(function (element, index) {
        return (
          <div key={index} class={styles.item}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
