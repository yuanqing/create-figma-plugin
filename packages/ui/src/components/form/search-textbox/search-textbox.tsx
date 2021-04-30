/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange, OnValueChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { IconCross } from '../../icon/icon-cross/icon-cross'
import { IconSearch } from '../../icon/icon-search/icon-search'
import styles from './search-textbox.css'

export type SearchTextboxProps<N extends string> = {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: N
  onChange?: OnChange<HTMLInputElement>
  onClear?: () => void
  onValueChange?: OnValueChange<string, N>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: string
}

export function SearchTextbox<N extends string>({
  clearOnEscapeKeyDown = false,
  disabled = false,
  name,
  onChange = function () {},
  onClear = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps<N>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus = useCallback(function (
    event: JSX.TargetedFocusEvent<HTMLInputElement>
  ) {
    event.currentTarget.select()
  },
  [])

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onValueChange(event.currentTarget.value, name, value)
      onChange(event)
    },
    [name, onChange, onValueChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Escape') {
        if (clearOnEscapeKeyDown === true && value !== '' && value !== null) {
          event.stopPropagation() // Clear the value without bubbling up the `Escape` key press
          getCurrentFromRef(inputElementRef).value = ''
          onClear()
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
    },
    [clearOnEscapeKeyDown, onClear, propagateEscapeKeyDown, value]
  )

  const handleClearButtonClick = useCallback(
    function () {
      const inputElement = getCurrentFromRef(inputElementRef)
      inputElement.value = ''
      inputElement.focus()
      onClear()
    },
    [onClear]
  )

  return (
    <div class={styles.searchTextbox}>
      <input
        {...rest}
        ref={inputElementRef}
        class={styles.input}
        disabled={disabled === true}
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
      {value === null || value === '' || disabled === true ? null : (
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
