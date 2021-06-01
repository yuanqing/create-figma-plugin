/** @jsx h */
import { ComponentChild, h, JSX, toChildArray } from 'preact'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import styles from './columns.css'

export type ColumnsProps = {
  children: ComponentChild
  space?: ColumnsSpace
}
export type ColumnsSpace =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'

export function Columns({
  children,
  space,
  ...rest
}: Props<HTMLDivElement, ColumnsProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.columns,
        typeof space === 'undefined' ? null : styles[space]
      ])}
    >
      {toChildArray(children).map(function (
        element: ComponentChild,
        index: number
      ): JSX.Element {
        return (
          <div key={index} class={styles.column}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
