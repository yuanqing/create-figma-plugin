/** @jsx h */
import { h } from 'preact'
import { ENTER_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './checkbox.scss'

export function Checkbox ({ children, name, onChange, value, ...rest }) {
  function handleChange (event) {
    onChange(event.target.checked === true, name)
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === ENTER_KEY_CODE) {
      onChange(value !== true, name)
    }
  }

  return (
    <label class={styles.label}>
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        name={name}
        checked={value === true}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
