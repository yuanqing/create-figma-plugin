/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange, OnValueChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { IconCross } from '../../icon/icon-cross/icon-cross'
import { IconSearch } from '../../icon/icon-search/icon-search'
import styles from './search-textbox.css'

export interface SearchTextboxProps<N extends string> {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: N
  onChange?: OnChange<HTMLInputElement>
  onValueChange?: OnValueChange<string, N>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: string
}

export function SearchTextbox<T extends string>({
  clearOnEscapeKeyDown = true,
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps<T>>): JSX.Element {
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
          onValueChange('', name, value)
          onChange(event)
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
    },
    [
      clearOnEscapeKeyDown,
      name,
      onChange,
      onValueChange,
      propagateEscapeKeyDown,
      value
    ]
  )

  const handleClearButtonClick = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
      const inputElement = getCurrentFromRef(inputElementRef)
      inputElement.value = ''
      inputElement.focus()
      onValueChange('', name, value)
      onChange({ ...event, currentTarget: inputElement })
    },
    [name, onChange, onValueChange, value]
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
