/** @jsx h */
import { ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import styles from './columns.css'

export type ColumnsProps = {
  children: ComponentChildren
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
      {toChildArray(children).map(function (element, index) {
        return (
          <div key={index} class={styles.column}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
