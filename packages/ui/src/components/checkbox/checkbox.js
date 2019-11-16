/** @jsx h */
import { h } from 'preact'
import styles from './checkbox.scss'

export function Checkbox ({ name, text, value, ...props }) {
  return (
    <label class={styles.checkbox} for={name}>
      <input
        {...props}
        class={styles.input}
        type='checkbox'
        id={name}
        name={name}
        checked={value === true}
      />
      <div class={styles.text}>{text}</div>
    </label>
  )
}
