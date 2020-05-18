/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h, toChildArray } from 'preact'

import { Space } from '../../types'
import styles from './columns.scss'

export interface ColumnsProps {
  children: preact.ComponentChildren
  space?: Space
}

export function Columns({
  children,
  space,
  ...rest
}: ColumnsProps): h.JSX.Element {
  return (
    <div
      {...rest}
      className={classnames(
        styles.columns,
        typeof space === 'undefined' ? null : styles[space]
      )}
    >
      {toChildArray(children).map(function (element, index) {
        return (
          <div className={styles.column} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
