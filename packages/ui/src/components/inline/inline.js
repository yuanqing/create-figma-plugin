/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './inline.scss'

export function Inline ({ children, space, ...rest }) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.inline,
        typeof space !== 'undefined' ? styles[space] : null
      )}
    >
      {children.map(function (element, index) {
        return (
          <div class={styles.item} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
