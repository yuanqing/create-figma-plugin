/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren } from 'preact'
import { h, toChildArray } from 'preact'

import type { HTMLProps, Space } from '../../types'
import styles from './columns.css'

export interface ColumnsProps {
  children: ComponentChildren
  space?: Space
}

export function Columns({
  children,
  space,
  ...rest
}: HTMLProps<ColumnsProps, HTMLDivElement>): h.JSX.Element {
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
