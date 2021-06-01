/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../../types/types'
import { MIXED_STRING } from '../../../../utilities/mixed-values'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating'

const EMPTY_STRING = ''

export type RawTextboxProps<Name extends string> = {
  disabled?: boolean
  name?: Name
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueInput?: OnValueChange<string, Name>
  password?: boolean
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  spellCheck?: boolean
  value: string
}

export function RawTextbox<Name extends string>({
  disabled = false,
  name,
  onInput = function () {},
  onValueInput = function () {},
  password = false,
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  spellCheck = false,
  value,
  ...rest
}: Props<HTMLInputElement, RawTextboxProps<Name>>): JSX.Element {
  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const handleBlur = useCallback(function (): void {
    setOriginalValue(EMPTY_STRING)
  }, [])

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueInput(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueInput]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
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
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>): void {
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
      }
    },
    [value]
  )

  return (
    <input
      {...rest}
      disabled={disabled === true}
      name={name}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onMouseUp={handleMouseUp}
      placeholder={placeholder}
      spellcheck={spellCheck}
      tabIndex={disabled === true ? -1 : 0}
      type={password === true ? 'password' : 'text'}
      value={value === MIXED_STRING ? 'Mixed' : value}
    />
  )
}
