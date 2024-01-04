import { Event, EventHandler } from '../../../../types/event-handler.js'
import { RefObject, useCallback, useRef, useState } from 'react'

import { FocusableComponentProps } from '../../../../types/focusable-component-props.js'
import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { createComponent } from '../../../../utilities/create-component.js'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref.js'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating.js'
import { noop } from '../../../../utilities/no-op.js'

const EMPTY_STRING = ''

export interface RawTextboxProps
  extends FocusableComponentProps<HTMLInputElement> {
  disabled?: boolean
  onBlur?: EventHandler.onBlur<HTMLInputElement>
  onFocus?: EventHandler.onFocus<HTMLInputElement>
  onMouseDown?: EventHandler.onMouseUp<HTMLInputElement>
  onInput?: EventHandler.onInput<HTMLInputElement>
  onValueInput?: EventHandler.onValueChange<string>
  password?: boolean
  placeholder?: string
  revertOnEscapeKeyDown?: boolean
  spellCheck?: boolean
  validateOnBlur?: (value: string) => string | boolean
  value: string
}

export const RawTextbox = createComponent<HTMLInputElement, RawTextboxProps>(
  function (
    {
      disabled = false,
      onBlur = noop,
      onFocus = noop,
      onInput = noop,
      onKeyDown = noop,
      onMouseDown = noop,
      onValueInput = noop,
      password = false,
      placeholder,
      propagateEscapeKeyDown = true,
      revertOnEscapeKeyDown = false,
      spellCheck = false,
      validateOnBlur,
      value,
      ...rest
    },
    ref
  ) {
    const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

    const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

    const setTextboxValue = useCallback(function (value: string) {
      const inputElement = getCurrentFromRef(inputElementRef)
      inputElement.value = value
      const inputEvent = new window.Event('input', {
        bubbles: true,
        cancelable: true
      })
      inputElement.dispatchEvent(inputEvent)
    }, [])

    const handleBlur = useCallback(
      function (event: Event.onBlur<HTMLInputElement>) {
        onBlur(event)
        if (typeof validateOnBlur !== 'undefined') {
          const result = validateOnBlur(value)
          if (typeof result === 'string') {
            // Set to the value returned by `validateOnBlur`
            setTextboxValue(result)
            setOriginalValue(EMPTY_STRING)
            return
          }
          if (result === false) {
            // Revert to the original value
            if (value !== originalValue) {
              setTextboxValue(originalValue)
            }
            setOriginalValue(EMPTY_STRING)
            return
          }
        }
        setOriginalValue(EMPTY_STRING)
      },
      [onBlur, originalValue, setTextboxValue, validateOnBlur, value]
    )

    const handleFocus = useCallback(
      function (event: Event.onFocus<HTMLInputElement>) {
        onFocus(event)
        setOriginalValue(value)
        event.currentTarget.select()
      },
      [onFocus, value]
    )

    const handleInput = useCallback(
      function (event: Event.onInput<HTMLInputElement>) {
        onInput(event)
        const newValue = event.currentTarget.value
        onValueInput(newValue)
      },
      [onInput, onValueInput]
    )

    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        onKeyDown(event)
        if (event.key === 'Escape') {
          if (revertOnEscapeKeyDown === true) {
            setTextboxValue(originalValue)
            setOriginalValue(EMPTY_STRING)
          }
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
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
        setTextboxValue,
        value
      ]
    )

    const handleMouseDown = useCallback(
      function (event: Event.onMouseUp<HTMLInputElement>) {
        onMouseDown(event)
        if (value === MIXED_STRING) {
          // Prevent changing the selection if `value` is `MIXED_STRING`
          event.preventDefault()
          event.currentTarget.select()
        }
      },
      [onMouseDown, value]
    )

    const refCallback = useCallback(
      function (inputElement: null | HTMLInputElement) {
        inputElementRef.current = inputElement
        if (ref === null) {
          return
        }
        if (typeof ref === 'function') {
          ref(inputElement)
          return
        }
        ref.current = inputElement
      },
      [ref]
    )

    return (
      <input
        {...rest}
        ref={refCallback}
        disabled={disabled === true}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        placeholder={placeholder}
        spellcheck={spellCheck}
        tabIndex={0}
        type={password === true ? 'password' : 'text'}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
    )
  }
)
