/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { IconCross } from '../../icon/icon-cross/icon-cross'
import { IconSearch } from '../../icon/icon-search/icon-search'
import styles from './search-textbox.css'

export interface SearchTextboxProps<T extends string> {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: T
  onValueChange: OnValueChange<string, T>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: string
}

export function SearchTextbox<T extends string>({
  clearOnEscapeKeyDown = true,
  disabled = false,
  name,
  onValueChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps<T>>): JSX.Element {
  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function (event: FocusEvent) {
      const element = event.target as HTMLInputElement
      element.select()
    },
    []
  )

  const handleInput: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const element = event.target as HTMLInputElement
      onValueChange(element.value, name)
    },
    [name, onValueChange]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (clearOnEscapeKeyDown === true && value !== '' && value !== null) {
          event.stopPropagation() // Clear the value without bubbling up the `Escape` key press
          onValueChange('', name)
          return
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        const element = event.target as HTMLInputElement
        element.blur()
      }
    },
    [clearOnEscapeKeyDown, name, onValueChange, propagateEscapeKeyDown, value]
  )

  const handleClearButtonClick: JSX.MouseEventHandler<HTMLButtonElement> = useCallback(
    function (event: MouseEvent) {
      onValueChange('', name)
      const element = event.target as HTMLInputElement
      element.focus()
    },
    [name, onValueChange]
  )

  return (
    <div class={styles.searchTextbox}>
      <input
        {...rest}
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
