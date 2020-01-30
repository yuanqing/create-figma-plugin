/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import '../../scss/base.scss'
import styles from './textbox.scss'

export function Textbox ({
  disabled: isDisabled,
  focused: isFocused,
  icon,
  name,
  noBorder,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}) {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef = useRef(null)

  const handleClick = useCallback(
    function () {
      if (value === null) {
        inputElementRef.current.focus()
        inputElementRef.current.select()
      }
    },
    [value]
  )

  function handleFocus () {
    inputElementRef.current.select()
  }

  const handleInput = useCallback(
    function () {
      onChange({ [name]: inputElementRef.current.value })
    },
    [name, onChange]
  )

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === ESCAPE_KEY_CODE) {
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      inputElementRef.current.blur()
    }
  }

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        hasIcon === true ? styles.hasIcon : null
      )}
    >
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={value === null ? 'Mixed' : value}
        onClick={handleClick}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        tabIndex={isDisabled === true ? null : '0'}
        data-initial-focus={isFocused === true}
      />
      {hasIcon ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}
