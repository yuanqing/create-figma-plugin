/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './checkbox.scss'

export function Checkbox ({
  children,
  disabled: isDisabled,
  name,
  onChange,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}) {
  const handleChange = useCallback(
    function (event) {
      onChange({ [name]: event.target.checked === true })
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
        onChange({ [name]: value !== true })
      }
    },
    [name, onChange, propagateEscapeKeyDown, value]
  )

  return (
    <label
      class={classnames(
        styles.label,
        isDisabled === true ? styles.disabled : null
      )}
    >
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        name={name}
        checked={value === true}
        disabled={isDisabled === true}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex='0'
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
