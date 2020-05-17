/** @jsx h */
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { crossIcon } from '../icon/icons/cross-icon'
import { searchIcon } from '../icon/icons/search-icon'
import styles from './search-textbox.scss'

export interface SearchTextboxProps {
  disabled?: boolean
  focused?: boolean
  name: string
  onChange: OnChange
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  clearOnEscapeKeyDown?: boolean
  value: string
}

export function SearchTextbox ({
  disabled: isDisabled,
  focused: isFocused,
  name,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  clearOnEscapeKeyDown = true,
  value,
  ...rest
}: SearchTextboxProps): h.JSX.Element {
  const inputElementRef: preact.RefObject<HTMLInputElement> = useRef(null)

  function handleFocus () {
    if (
      inputElementRef.current === null ||
      typeof inputElementRef.current === 'undefined'
    ) {
      return
    }
    inputElementRef.current.select()
  }

  const handleInput = useCallback(
    function (event: Event) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const newValue = inputElementRef.current.value
      onChange({ [name]: newValue }, newValue, name, event)
    },
    [name, onChange]
  )

  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (clearOnEscapeKeyDown === true && value !== '' && value !== null) {
          const newValue = ''
          onChange({ [name]: newValue }, newValue, name, event)
          event.stopPropagation()
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (
          inputElementRef.current === null ||
          typeof inputElementRef.current === 'undefined'
        ) {
          return
        }
        inputElementRef.current.blur()
      }
    },
    [clearOnEscapeKeyDown, name, onChange, propagateEscapeKeyDown, value]
  )

  const handleClearClick = useCallback(
    function (event: MouseEvent) {
      const newValue = ''
      onChange({ [name]: newValue }, newValue, name, event)
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      inputElementRef.current.focus()
    },
    [name, onChange]
  )

  return (
    <div class={styles.searchTextbox}>
      <input
        {...rest}
        disabled={isDisabled}
        ref={inputElementRef}
        type='text'
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={value === null ? '' : value}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        data-initial-focus={isFocused === true}
      />
      <div class={styles.searchIcon}>{searchIcon}</div>
      {value === null || value === '' ? null : (
        <div class={styles.clear} onClick={handleClearClick} tabIndex={0}>
          {crossIcon}
        </div>
      )}
    </div>
  )
}
