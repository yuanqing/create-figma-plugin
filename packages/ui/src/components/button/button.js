/** @jsx h */
import { h } from 'preact'
import styles from './button.scss'

export function Button ({ secondary, text, ...rest }) {
  return (
    <button
      class={styles[secondary === true ? 'secondary' : 'button']}
      {...rest}
    >
      {text}
    </button>
  )
}
