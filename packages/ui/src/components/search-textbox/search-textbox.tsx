/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref'
import { IconCross32 } from '../icon/icon-32/icon-cross-32'
import { IconSearch32 } from '../icon/icon-32/icon-search-32'
import styles from './search-textbox.css'

const EMPTY_STRING = ''

export type SearchTextboxProps<Name extends string> = {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  name?: Name
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueInput?: OnValueChange<string, Name>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  spellCheck?: boolean
  value: string
}

export function SearchTextbox<Name extends string>({
  clearOnEscapeKeyDown = false,
  disabled = false,
  name,
  onInput = function () {},
  onValueInput = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  spellCheck = false,
  value,
  ...rest
}: Props<HTMLInputElement, SearchTextboxProps<Name>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleClearButtonClick = useCallback(function (): void {
    const inputElement = getCurrentFromRef(inputElementRef)
    inputElement.value = EMPTY_STRING
    const inputEvent = document.createEvent('Event')
    inputEvent.initEvent('input', true, true)
    inputElement.dispatchEvent(inputEvent)
    inputElement.focus()
  }, [])

  const handleFocus = useCallback(function (
    event: JSX.TargetedFocusEvent<HTMLInputElement>
  ): void {
    event.currentTarget.select()
  },
  [])

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueInput(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueInput]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (
        clearOnEscapeKeyDown === true &&
        value !== EMPTY_STRING &&
        value !== null
      ) {
        event.stopPropagation() // Clear the value without bubbling up the `Escape` key press
        handleClearButtonClick()
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [
      clearOnEscapeKeyDown,
      handleClearButtonClick,
      propagateEscapeKeyDown,
      value
    ]
  )

  return (
    <div
      class={createClassName([
        styles.searchTextbox,
        disabled === true ? styles.disabled : null
      ])}
    >
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
        spellcheck={spellCheck}
        tabIndex={0}
        type="text"
        value={value === null ? EMPTY_STRING : value}
      />
      <div class={styles.searchIcon}>
        <IconSearch32 />
      </div>
      {value === null || value === EMPTY_STRING || disabled === true ? null : (
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
