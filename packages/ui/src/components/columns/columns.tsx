/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h, toChildArray } from 'preact'
import { Space } from '../../types/space'
import styles from './columns.scss'

export interface ColumnsProps {
  children: React.ReactNode,
  space?: Space
}

export function Columns ({ children, space, ...rest } : ColumnsProps) {
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
          <div class={styles.column} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
