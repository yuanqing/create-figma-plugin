/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import styles from './button.scss'

export function Button ({
  destructive: isDestructive,
  fullWidth: isFullWidth,
  secondary: isSecondary,
  text,
  ...props
}) {
  return (
    <button
      {...props}
      class={classnames(
        styles.button,
        isSecondary === true ? styles.isSecondary : null,
        isDestructive === true ? styles.isDestructive : null,
        isFullWidth === true ? styles.isFullWidth : null
      )}
    >
      {text}
    </button>
  )
}
