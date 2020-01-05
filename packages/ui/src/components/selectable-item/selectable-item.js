/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { checkIcon } from '../../icons/check-icon'
import '../../scss/base.scss'
import styles from './selectable-item.scss'

export function SelectableItem ({
  bold: isBold,
  children,
  disabled: isDisabled,
  focused: isFocused,
  icon: hasIcon,
  name,
  value,
  onChange,
  onKeyDown,
  propagateEscapeKeyDown,
  ...rest
}) {
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
    [name, value, onChange, onKeyDown, propagateEscapeKeyDown]
  )

  return (
    <label
      {...rest}
      class={classnames(
        styles.label,
        isDisabled === true ? styles.isDisabled : null,
        isBold === true ? styles.isBold : null,
        isFocused === true ? styles.isFocused : null,
        value === true ? styles.isChecked : null
      )}
      onKeyDown={isDisabled === true ? null : handleKeyDown}
      tabIndex='0'
    >
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        name={name}
        checked={value === true}
        disabled={isDisabled === true}
        onChange={handleChange}
        tabIndex='-1'
      />
      <div class={styles.text}>{children}</div>
      {value === true ? <div class={styles.icon}>{checkIcon}</div> : null}
    </label>
  )
}
