/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref'
import { IconCross32 } from '../icon/icon-32/icon-cross-32'
import { IconSearch32 } from '../icon/icon-32/icon-search-32'
import styles from './search-textbox.css'

export type SearchTextboxProps<N extends string> = {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: N
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
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
  onClear = function () {},
  onInput = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps<N>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus = useCallback(function (
    event: JSX.TargetedFocusEvent<HTMLInputElement>
  ): void {
    event.currentTarget.select()
  },
  [])

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueChange]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
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
    },
    [clearOnEscapeKeyDown, onClear, propagateEscapeKeyDown, value]
  )

  const handleClearButtonClick = useCallback(
    function (): void {
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
        <IconSearch32 />
      </div>
      {value === null || value === '' || disabled === true ? null : (
        <button
          class={styles.clearButton}
          onClick={handleClearButtonClick}
          tabIndex={0}
        >
          <IconCross32 />
        </button>
      )}
    </div>
  )
}
