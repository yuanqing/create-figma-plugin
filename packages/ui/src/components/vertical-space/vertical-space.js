/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({ size, ...rest }) {
  return (
    <div
      {...rest}
      class={styles[typeof size === 'undefined' ? 'small' : size]}
    />
  )
}
