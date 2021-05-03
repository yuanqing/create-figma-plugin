/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import { MIXED_STRING } from '../../utilities/mixed-values'
import { isKeyCodeCharacterGenerating } from './private/is-keycode-character-generating'
import styles from './textbox.css'

const EMPTY_STRING = ''

export type TextboxProps<N extends string> = {
  disabled?: boolean
  icon?: ComponentChildren
  name?: N
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<string, N>
  password?: boolean
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  value: string
}

export function Textbox<N extends string>({
  disabled = false,
  icon,
  name,
  noBorder = false,
  onInput = function () {},
  onValueChange = function () {},
  password = false,
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  value,
  ...rest
}: Props<HTMLInputElement, TextboxProps<N>>): JSX.Element {
  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it is focused

  const handleBlur = useCallback(function () {
    setOriginalValue(EMPTY_STRING)
  }, [])

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>) {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onValueChange(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueChange]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          event.currentTarget.value = originalValue
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          event.currentTarget.dispatchEvent(inputEvent)
        }
        event.currentTarget.blur()
        return
      }
      if (event.key === 'Enter') {
        event.currentTarget.blur()
        return
      }
      if (
        value === MIXED_STRING &&
        isKeyCodeCharacterGenerating(event.keyCode) === false
      ) {
        // Prevent changing the cursor position with the keyboard if `value` is `MIXED_STRING`
        event.preventDefault()
        event.currentTarget.select()
      }
    },
    [originalValue, propagateEscapeKeyDown, revertOnEscapeKeyDown, value]
  )

  const handleMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>) {
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
      }
    },
    [value]
  )

  return (
    <div
      class={createClassName([
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        typeof icon === 'undefined' ? null : styles.hasIcon
      ])}
    >
      <input
        {...rest}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type={password === true ? 'password' : 'text'}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
    </div>
  )
}
