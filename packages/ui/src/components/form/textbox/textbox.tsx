/** @jsx h */
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnValueChange, Props } from '../../../types'
import styles from './textbox.css'
import { isKeyCodeCharacterGenerating } from './utilities/is-keycode-character-generating'

export interface TextboxProps<T extends string> {
  disabled?: boolean
  icon?: ComponentChildren
  name?: T
  noBorder?: boolean
  onValueChange: OnValueChange<string, T>
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
  onValueChange,
  placeholder,
  propagateEscapeKeyDown = true,
  type = 'text',
  value,
  ...rest
}: Props<HTMLInputElement, TextboxProps<T>>): JSX.Element {
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
      const element = event.target as HTMLInputElement
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        element.blur()
      }
      if (
        value !== MIXED_STRING ||
        isKeyCodeCharacterGenerating(event.keyCode) === true
      ) {
        return
      }
      event.preventDefault()
      element.select()
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
