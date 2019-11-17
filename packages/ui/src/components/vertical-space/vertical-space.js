/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({
  extraSmall,
  small,
  large,
  extraLarge,
  ...props
}) {
  /* eslint-disable indent */
  const size =
    extraLarge === true
      ? 'extraLarge'
      : large === true
      ? 'large'
      : small === true
      ? 'small'
      : extraSmall === true
      ? 'extraSmall'
      : 'medium'
  /* eslint-enable indent */
  return <div {...props} class={styles[size]} />
}
