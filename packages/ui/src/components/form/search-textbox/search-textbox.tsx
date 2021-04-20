/** @jsx h */
import type { JSX, RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import { IconCross } from '../../icon/icon-cross/icon-cross'
import { IconSearch } from '../../icon/icon-search/icon-search'
import styles from './search-textbox.css'

export interface SearchTextboxProps {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: string
  onChange: OnChange<string>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: string
}

export function SearchTextbox({
  clearOnEscapeKeyDown = true,
  disabled = false,
  name,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      getCurrentFromRef(inputElementRef).select()
    },
    []
  )

  const handleInput: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const newValue = getCurrentFromRef(inputElementRef).value
      onChange(newValue, name, event)
    },
    [name, onChange]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (clearOnEscapeKeyDown === true && value !== '' && value !== null) {
          const newValue = ''
          onChange(newValue, name, event)
          event.stopPropagation()
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        getCurrentFromRef(inputElementRef).blur()
      }
    },
    [clearOnEscapeKeyDown, name, onChange, propagateEscapeKeyDown, value]
  )

  const handleClearButtonClick: JSX.MouseEventHandler<HTMLButtonElement> = useCallback(
    function (event: MouseEvent) {
      onChange('', name, event)
      getCurrentFromRef(inputElementRef).focus()
    },
    [name, onChange]
  )

  return (
    <div class={styles.searchTextbox}>
      <input
        {...rest}
        ref={inputElementRef}
        class={styles.input}
        disabled={disabled}
        name={name}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        tabIndex={0}
        type="text"
        value={value === null ? '' : value}
      />
      <div class={styles.searchIcon}>
        <IconSearch />
      </div>
      {value === null || value === '' ? null : (
        <button
          class={styles.clearButton}
          onClick={handleClearButtonClick}
          tabIndex={0}
        >
          <IconCross />
        </button>
      )}
    </div>
  )
}
