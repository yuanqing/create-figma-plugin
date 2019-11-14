/** @jsx h */
import { h } from 'preact'
import styles from './vertical-space.scss'

export function VerticalSpace ({ size }) {
  return <div class={styles[typeof size === 'undefined' ? 'small' : size]} />
}
