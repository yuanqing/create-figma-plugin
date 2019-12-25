/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './checkbox.scss'

export function Checkbox ({
  children,
  disabled,
  name,
  onChange,
  propagateEscapeKeyDown = false,
  value,
  ...rest
}) {
  const handleChange = useCallback(
    function (event) {
      onChange(event.target.checked === true, name)
    },
    [name, onChange]
  )

  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.target.blur()
        return
      }
      if (keyCode === ENTER_KEY_CODE) {
        event.stopPropagation()
        onChange(value !== true, name)
      }
    },
    [name, onChange, propagateEscapeKeyDown, value]
  )

  return (
    <label
      class={classnames(
        styles.label,
        disabled === true ? styles.disabled : null
      )}
    >
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        name={name}
        checked={value === true}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
