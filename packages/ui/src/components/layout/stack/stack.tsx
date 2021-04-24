/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Props } from '../../../types'
import styles from './stack.css'

export interface StackProps {
  children: ComponentChildren
  space?: StackSpace
}
export type StackSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function Stack({
  children,
  space = 'small',
  ...rest
}: Props<HTMLDivElement, StackProps>): JSX.Element {
  return (
    <div {...rest} class={classnames(styles[space])}>
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
