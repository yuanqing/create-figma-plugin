/** @jsx h */
import { h } from 'preact'
import styles from './checkbox.scss'

export function Checkbox ({ children, name, style, value, ...rest }) {
  return (
    <label class={styles.checkbox} for={name} style={style}>
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        id={name}
        name={name}
        checked={value === true}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
