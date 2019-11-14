/** @jsx h */
import { h } from 'preact'
import styles from './checkbox.scss'

export function Checkbox ({ children, name, text, ...rest }) {
  return (
    <label class={styles.checkbox} for={name}>
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        id={name}
        name={name}
      />
      <div class={styles.text}>{text}</div>
      {children !== null ? <div class={styles.children}>{children}</div> : null}
    </label>
  )
}
