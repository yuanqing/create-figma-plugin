/** @jsx h */
import { h } from 'preact'
import styles from './button.scss'
import classnames from '@sindresorhus/class-names'

export function Button ({ destructive, secondary, text, ...rest }) {
  return (
    <button
      {...rest}
      class={classnames(
        styles.button,
        secondary === true ? styles.secondary : null,
        destructive === true ? styles.destructive : null
      )}
    >
      {text}
    </button>
  )
}
