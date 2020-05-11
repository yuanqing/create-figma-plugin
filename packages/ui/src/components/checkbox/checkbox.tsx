/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './checkbox.scss'

export interface CheckboxProps {
  children: React.ReactNode,
  disabled?: boolean,
  focused?: boolean,
  name: string,
  onChange: (state) => void, // FIXME
  onKeyDown?: (event?) => void, // FIXME
  propagateEscapeKeyDown?: boolean,
  value: boolean
}

export function Checkbox ({
  children,
  disabled: isDisabled,
  focused: isFocused,
  name,
  onChange,
  onKeyDown = null,
  propagateEscapeKeyDown = true,
  value,
  ...rest
} : CheckboxProps) {
  const handleChange = useCallback(
    function () {
      onChange({ [name]: !(value === true) })
    },
    [name, onChange, value]
  )

  const handleKeyDown = useCallback(
    function (event) {
      switch (event.keyCode) {
        case ESCAPE_KEY_CODE: {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          event.target.blur()
          break
        }
        case ENTER_KEY_CODE: {
          event.stopPropagation()
          onChange({ [name]: !(value === true) })
          break
        }
      }
      if (typeof onKeyDown === 'function') {
        onKeyDown(event)
      }
    },
    [name, onChange, onKeyDown, propagateEscapeKeyDown, value]
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
        tabIndex={isDisabled === true ? null : 0}
        data-initial-focus={isFocused === true}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
