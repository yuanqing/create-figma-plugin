/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({ extraSmall, small, medium, large, ...rest }) {
  return (
    <div
      {...rest}
      class={
        (extraSmall === true ? styles.extraSmall : null) ||
        (small === true ? styles.small : null) ||
        (medium === true ? styles.medium : null) ||
        (large === true ? styles.large : null)
      }
    />
  )
}
