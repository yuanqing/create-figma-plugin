/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({
  extraSmall,
  small,
  large,
  extraLarge,
  style,
  ...rest
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
  return <div {...rest} class={styles[size]} style={style} />
}
