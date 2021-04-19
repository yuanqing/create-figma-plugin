/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import type { RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import styles from './textbox.css'
import { isKeyCodeCharacterGenerating } from './utilities/is-keycode-character-generating'
import { TEXTBOX_MIXED_VALUE } from './utilities/textbox-mixed-value'

export interface TextboxProps {
  disabled?: boolean
  icon?: ComponentChildren
  name?: string
  noBorder?: boolean
  onChange: OnChange<typeof TEXTBOX_MIXED_VALUE | string>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  type?: 'text' | 'password'
  value: typeof TEXTBOX_MIXED_VALUE | string
}

export function Textbox({
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
}: Props<HTMLInputElement, TextboxProps>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      inputElementRef.current.select()
    },
    []
  )

  const handleInput: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const newValue = inputElementRef.current.value
      onChange(newValue, name, event)
    },
    [name, onChange]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        inputElementRef.current.blur()
      }
      if (
        value !== TEXTBOX_MIXED_VALUE ||
        isKeyCodeCharacterGenerating(keyCode) === true
      ) {
        return
      }
      event.preventDefault()
      inputElementRef.current.select()
    },
    [value, propagateEscapeKeyDown]
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
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : undefined}
        type={type}
        value={value === TEXTBOX_MIXED_VALUE ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
    </div>
  )
}
