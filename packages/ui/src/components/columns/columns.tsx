/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h, toChildArray } from 'preact'

import { HTMLProps, Space } from '../../types'
import styles from './columns.scss'

export interface ColumnsProps {
  children: preact.ComponentChildren
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
