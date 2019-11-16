/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({ medium, large, extraLarge, ...props }) {
  /* eslint-disable indent */
  const size =
    extraLarge === true
      ? 'extraLarge'
      : large === true
      ? 'large'
      : medium === true
      ? 'medium'
      : 'small'
  /* eslint-enable indent */
  return <div {...props} class={styles[size]} />
}
