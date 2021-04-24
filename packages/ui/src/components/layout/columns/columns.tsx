/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Props } from '../../../types'
import styles from './columns.css'

export interface ColumnsProps {
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
      class={classnames(
        styles.columns,
        typeof space === 'undefined' ? null : styles[space]
      )}
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
