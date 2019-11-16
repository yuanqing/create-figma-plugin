/** @jsx h */
import { h } from 'preact'
import styles from './button.scss'
import classnames from '@sindresorhus/class-names'

export function Button ({ destructive, fullWidth, secondary, text, ...rest }) {
  return (
    <button
      {...rest}
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
