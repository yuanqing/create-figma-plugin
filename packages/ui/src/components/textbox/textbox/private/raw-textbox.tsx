import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../../types/types.js'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref.js'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating.js'

const EMPTY_STRING = ''

export type RawTextboxProps<Name extends string> = {
  disabled?: boolean
  name?: Name
  onBlur?: OmitThisParameter<JSX.FocusEventHandler<HTMLInputElement>>
  onFocus?: OmitThisParameter<JSX.FocusEventHandler<HTMLInputElement>>
  onKeyDown?: OmitThisParameter<JSX.KeyboardEventHandler<HTMLInputElement>>
  onMouseUp?: OmitThisParameter<JSX.MouseEventHandler<HTMLInputElement>>
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueInput?: OnValueChange<string, Name>
  password?: boolean
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  spellCheck?: boolean
  validateOnBlur?: (value: string) => string | boolean
  value: string
}

export function RawTextbox<Name extends string>({
  disabled = false,
  name,
  onBlur = function () {},
  onFocus = function () {},
  onInput = function () {},
  onKeyDown = function () {},
  onMouseUp = function () {},
  onValueInput = function () {},
  password = false,
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  spellCheck = false,
  validateOnBlur,
  value,
  ...rest
}: Props<HTMLInputElement, RawTextboxProps<Name>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const revertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const setInputElementValue = useCallback(function (value: string): void {
    const inputElement = getCurrentFromRef(inputElementRef)
    inputElement.value = value
    const inputEvent = document.createEvent('Event')
    inputEvent.initEvent('input', true, true)
    inputElement.dispatchEvent(inputEvent)
  }, [])

  const handleBlur = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false
        return
      }
      onBlur(event)
      if (typeof validateOnBlur !== 'undefined') {
        const result = validateOnBlur(value)
        if (typeof result === 'string') {
          // Set to the value returned by `validateOnBlur`
          setInputElementValue(result)
          setOriginalValue(EMPTY_STRING)
          return
        }
        if (result === false) {
          // Revert the original value
          if (value !== originalValue) {
            setInputElementValue(originalValue)
          }
          setOriginalValue(EMPTY_STRING)
          return
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [onBlur, originalValue, setInputElementValue, validateOnBlur, value]
  )

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      onFocus(event)
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [onFocus, value]
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
      onKeyDown(event)
      const key = event.key
      if (key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true
          setInputElementValue(originalValue)
          setOriginalValue(EMPTY_STRING)
        }
        event.currentTarget.blur()
        return
      }
      if (key === 'Enter') {
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
    [
      onKeyDown,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      value
    ]
  )

  const handleMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>): void {
      onMouseUp(event)
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
      }
    },
    [onMouseUp, value]
  )

  return (
    <input
      {...rest}
      ref={inputElementRef}
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
