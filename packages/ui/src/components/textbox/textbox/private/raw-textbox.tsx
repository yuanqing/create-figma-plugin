import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { Event, EventHandler } from '../../../../types/event-handler.js'
import { FocusableComponentProps } from '../../../../types/focusable-component-props.js'
import { createComponent } from '../../../../utilities/create-component.js'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref.js'
import { noop } from '../../../../utilities/no-op.js'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating.js'

const EMPTY_STRING = ''

export interface RawTextboxProps
  extends FocusableComponentProps<HTMLInputElement> {
  disabled?: boolean
  onBlur?: EventHandler.onBlur<HTMLInputElement>
  onFocus?: EventHandler.onFocus<HTMLInputElement>
  onKeyDown?: EventHandler.onKeyDown<HTMLInputElement>
  onMouseUp?: EventHandler.onMouseUp<HTMLInputElement>
  onInput?: EventHandler.onInput<HTMLInputElement>
  onValueInput?: (value: string) => void
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
      blurOnEscapeKeyDown = true,
      disabled = false,
      onBlur = noop,
      onFocus = noop,
      onInput = noop,
      onKeyDown = noop,
      onMouseUp = noop,
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
    const revertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

    const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

    const setInputElementValue = useCallback(function (value: string) {
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
        if (revertOnEscapeKeyDownRef.current === true) {
          revertOnEscapeKeyDownRef.current = false
          return
        }
        if (typeof validateOnBlur !== 'undefined') {
          const result = validateOnBlur(value)
          if (typeof result === 'string') {
            // Set to the value returned by `validateOnBlur`
            setInputElementValue(result)
            setOriginalValue(EMPTY_STRING)
            onBlur(event)
            return
          }
          if (result === false) {
            // Revert the original value
            if (value !== originalValue) {
              setInputElementValue(originalValue)
            }
            setOriginalValue(EMPTY_STRING)
            onBlur(event)
            return
          }
        }
        setOriginalValue(EMPTY_STRING)
        onBlur(event)
      },
      [onBlur, originalValue, setInputElementValue, validateOnBlur, value]
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
        onValueInput(event.currentTarget.value)
      },
      [onInput, onValueInput]
    )

    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        onKeyDown(event)
        const key = event.key
        if (key === 'Escape') {
          if (revertOnEscapeKeyDown === true) {
            revertOnEscapeKeyDownRef.current = true
            setInputElementValue(originalValue)
            setOriginalValue(EMPTY_STRING)
          }
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          if (blurOnEscapeKeyDown === true) {
            event.currentTarget.blur()
          }
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
        blurOnEscapeKeyDown,
        onKeyDown,
        originalValue,
        propagateEscapeKeyDown,
        revertOnEscapeKeyDown,
        setInputElementValue,
        value
      ]
    )

    const handleMouseUp = useCallback(
      function (event: Event.onMouseUp<HTMLInputElement>) {
        onMouseUp(event)
        if (value === MIXED_STRING) {
          // Prevent changing the selection if `value` is `MIXED_STRING`
          event.preventDefault()
        }
      },
      [onMouseUp, value]
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
      [ref, inputElementRef]
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
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        spellcheck={spellCheck}
        tabIndex={0}
        type={password === true ? 'password' : 'text'}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
    )
  }
)
