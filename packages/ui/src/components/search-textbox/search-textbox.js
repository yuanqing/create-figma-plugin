/** @jsx h */
import { h } from 'preact'
import { useLayoutEffect, useRef } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { searchIcon } from '../../icons/search-icon'
import '../../scss/base.scss'
import styles from './search-textbox.scss'

export function SearchTextbox ({
  focused: isFocused,
  name,
  onChange,
  placeholder,
  propagateEscapeKeyDown = false,
  value,
  ...rest
}) {
  const inputElementRef = useRef(null)

  function handleFocus () {
    inputElementRef.current.select()
  }

  function handleInput () {
    onChange(inputElementRef.current.value, name)
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === ESCAPE_KEY_CODE) {
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      inputElementRef.current.blur()
    }
  }

  useLayoutEffect(
    function () {
      if (isFocused === true) {
        handleFocus()
      }
    },
    [isFocused]
  )

  return (
    <div class={styles.searchTextbox}>
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={value === null ? '' : value}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />
      <div class={styles.icon}>{searchIcon}</div>
    </div>
  )
}
