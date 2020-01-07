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
  icon: hasIcon,
  name,
  value,
  onClick,
  onKeyDown,
  propagateEscapeKeyDown,
  ...rest
}) {
  const handleChange = useCallback(
    function (event) {
      const newValue = !(value === true)
      onClick({ [name]: newValue }, newValue, name, event)
    },
    [name, onClick, value]
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
          onClick({ [name]: !(value === true) })
          break
        }
      }
      if (typeof onKeyDown === 'function') {
        onKeyDown(event)
      }
    },
    [name, value, onClick, onKeyDown, propagateEscapeKeyDown]
  )

  return (
    <label
      {...rest}
      class={classnames(
        styles.label,
        isDisabled === true ? styles.isDisabled : null,
        isBold === true ? styles.isBold : null,
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
