/** @jsx h */
import { h } from 'preact'
import styles from './checkbox.scss'

export function Checkbox ({ children, name, onChange, style, value, ...rest }) {
  function handleChange (event) {
    onChange(event.target.checked === true, name)
  }

  return (
    <label class={styles.checkbox} for={name} style={style}>
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        id={name}
        name={name}
        checked={value === true}
        onChange={handleChange}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
