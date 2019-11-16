/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import styles from './button.scss'

export function Button ({ destructive, fullWidth, secondary, text, ...props }) {
  return (
    <button
      {...props}
      class={classnames(
        styles.button,
        secondary === true ? styles.secondary : null,
        destructive === true ? styles.destructive : null,
        fullWidth === true ? styles.fullWidth : null
      )}
    >
      {text}
    </button>
  )
}
