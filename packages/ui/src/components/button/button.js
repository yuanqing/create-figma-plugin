/** @jsx h */
import { h } from 'preact'
import styles from './button.scss'

export function Button ({ secondary, text, ...rest }) {
  return (
    <button
      {...rest}
      class={styles[secondary === true ? 'secondary' : 'button']}
    >
      {text}
    </button>
  )
}
