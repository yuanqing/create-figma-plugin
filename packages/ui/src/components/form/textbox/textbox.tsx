/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX, RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import styles from './textbox.css'
import { isKeyCodeCharacterGenerating } from './utilities/is-keycode-character-generating'
import { MIXED_STRING } from './utilities/mixed-constants'

export interface TextboxProps<T extends string> {
  disabled?: boolean
  icon?: ComponentChildren
  name?: T
  noBorder?: boolean
  onChange: OnChange<string, T>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  type?: 'text' | 'password'
  value: string
}

export function Textbox<T extends string>({
  disabled = false,
  icon,
  name,
  noBorder = false,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  type = 'text',
  value,
  ...rest
}: Props<HTMLInputElement, TextboxProps<T>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      const inputElement = getCurrentFromRef(inputElementRef)
      inputElement.select()
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
      const inputElement = getCurrentFromRef(inputElementRef)
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        inputElement.blur()
      }
      if (
        value !== MIXED_STRING ||
        isKeyCodeCharacterGenerating(keyCode) === true
      ) {
        return
      }
      event.preventDefault()
      inputElement.select()
    },
    [value, propagateEscapeKeyDown]
  )

  const handleMouseUp: JSX.MouseEventHandler<HTMLInputElement> = useCallback(
    function (event: MouseEvent) {
      if (value !== MIXED_STRING) {
        return
      }
      event.preventDefault()
    },
    [value]
  )

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        typeof icon === 'undefined' ? null : styles.hasIcon
      )}
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
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type={type}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
    </div>
  )
}
