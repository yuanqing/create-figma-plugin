/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import styles from './columns.scss'

export function Columns ({ children, space, ...rest }) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.columns,
        typeof space !== 'undefined' ? styles[space] : null
      )}
    >
      {children.map(function (element, index) {
        return (
          <div class={styles.column} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
