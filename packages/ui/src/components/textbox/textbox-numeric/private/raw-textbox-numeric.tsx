import {
  evaluateNumericExpression,
  isValidNumericInput,
  MIXED_NUMBER,
  MIXED_STRING
} from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { Event, EventHandler } from '../../../../types/event-handler.js'
import { FocusableComponentProps } from '../../../../types/focusable-component-props.js'
import { createComponent } from '../../../../utilities/create-component.js'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref.js'
import { noop } from '../../../../utilities/no-op.js'
import { computeNextValue } from '../../private/compute-next-value.js'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating.js'
import { formatEvaluatedValue } from './format-evaluated-value.js'

const FRACTION_DIGITS = 3
const EMPTY_STRING = ''

export interface RawTextboxNumericProps
  extends FocusableComponentProps<HTMLInputElement> {
  disabled?: boolean
  incrementBig?: number
  incrementSmall?: number
  integer?: boolean
  maximum?: number
  minimum?: number
  onBlur?: EventHandler.onBlur<HTMLInputElement>
  onFocus?: EventHandler.onFocus<HTMLInputElement>
  onInput?: EventHandler.onInput<HTMLInputElement>
  onMouseDown?: EventHandler.onMouseUp<HTMLInputElement>
  onNumericValueInput?: EventHandler.onValueChange<null | number>
  onValueInput?: EventHandler.onValueChange<string>
  placeholder?: string
  revertOnEscapeKeyDown?: boolean
  suffix?: string
  validateOnBlur?: (value: null | number) => null | number | boolean
  value: string
}

export const RawTextboxNumeric = createComponent<
  HTMLInputElement,
  RawTextboxNumericProps
>(function (
  {
    blurOnEscapeKeyDown = true,
    disabled = false,
    incrementBig = 10,
    incrementSmall = 1,
    integer = false,
    maximum,
    minimum,
    onBlur = noop,
    onFocus = noop,
    onInput = noop,
    onMouseDown = noop,
    onKeyDown = noop,
    onNumericValueInput = noop,
    onValueInput = noop,
    placeholder,
    propagateEscapeKeyDown = true,
    revertOnEscapeKeyDown = false,
    suffix,
    validateOnBlur,
    value,
    ...rest
  },
  ref
) {
  if (
    typeof minimum !== 'undefined' &&
    typeof maximum !== 'undefined' &&
    minimum >= maximum
  ) {
    throw new Error('`minimum` must be less than `maximum`')
  }

  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

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
      onBlur(event)
      if (typeof validateOnBlur !== 'undefined') {
        const evaluatedValue = evaluateValue(value, suffix)
        const result = validateOnBlur(evaluatedValue)
        if (typeof result === 'number') {
          // Set to the value returned by `validateOnBlur`
          setInputElementValue(formatEvaluatedValue(result, value, suffix))
          setOriginalValue(EMPTY_STRING)
          return
        }
        if (result === null) {
          // Set value to the empty string
          setInputElementValue(EMPTY_STRING)
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
      if (typeof suffix !== 'undefined' && value === suffix) {
        // We don't want a textbox to contain just the `suffix`, so clear the `value`
        setInputElementValue(EMPTY_STRING)
        setOriginalValue(EMPTY_STRING)
        return
      }
      if (value !== EMPTY_STRING && value !== MIXED_STRING) {
        const evaluatedValue = evaluateValue(value, suffix)
        const formattedValue = formatEvaluatedValue(
          evaluatedValue,
          value,
          suffix
        )
        if (value !== formattedValue) {
          setInputElementValue(formattedValue)
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [onBlur, originalValue, setInputElementValue, suffix, validateOnBlur, value]
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
      const evaluatedValue = evaluateValue(newValue, suffix)
      onNumericValueInput(evaluatedValue)
    },
    [onInput, onNumericValueInput, onValueInput, suffix]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLInputElement>) {
      onKeyDown(event)
      const key = event.key
      if (key === 'Escape') {
        if (revertOnEscapeKeyDown === true) {
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
      const inputElement = event.currentTarget
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        const delta = event.shiftKey === true ? incrementBig : incrementSmall
        event.preventDefault()
        if (value === EMPTY_STRING || value === MIXED_STRING) {
          // `startingValue` is biased towards 0
          const startingValue = (function () {
            if (typeof minimum !== 'undefined' && minimum > 0) {
              return minimum
            }
            if (typeof maximum !== 'undefined' && maximum < 0) {
              return maximum
            }
            return 0
          })()
          const evaluatedValue = evaluateValueWithDelta(
            startingValue,
            key === 'ArrowDown' ? -1 * delta : delta
          )
          const newValue = restrictValue(evaluatedValue, minimum, maximum)
          const formattedValue = formatEvaluatedValue(newValue, value, suffix)
          inputElement.value = formattedValue
          inputElement.select()
          handleInput(event)
          return
        }
        const number = evaluateValue(value, suffix)
        if (number === null) {
          throw new Error('`number` is `null`')
        }
        const evaluatedValue = evaluateValueWithDelta(
          number,
          key === 'ArrowDown' ? -1 * delta : delta
        )
        const newValue = restrictValue(evaluatedValue, minimum, maximum)
        const formattedValue = formatEvaluatedValue(newValue, value, suffix)
        if (formattedValue === value) {
          return
        }
        inputElement.value = formattedValue
        inputElement.select()
        handleInput(event)
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        // Piece together `newValue` using the key that was pressed, and stop
        // the `keyDown` event (by calling `event.preventDefault()`) if
        // `newValue` is found to be invalid
        const newValue = trimSuffix(
          value === MIXED_STRING
            ? event.key
            : computeNextValue(inputElement, event.key),
          suffix
        )
        if (
          isValidNumericInput(newValue, { integersOnly: integer }) === false
        ) {
          event.preventDefault()
          return
        }
        if (typeof minimum === 'undefined' && typeof maximum === 'undefined') {
          return
        }
        const evaluatedValue = evaluateNumericExpression(newValue)
        if (evaluatedValue === null) {
          return
        }
        if (
          (typeof minimum !== 'undefined' && evaluatedValue < minimum) ||
          (typeof maximum !== 'undefined' && evaluatedValue > maximum)
        ) {
          event.preventDefault()
        }
      }
    },
    [
      blurOnEscapeKeyDown,
      handleInput,
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      onKeyDown,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      suffix,
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

  const handlePaste = useCallback(
    function (event: Event.onPaste<HTMLInputElement>) {
      if (event.clipboardData === null) {
        throw new Error('`event.clipboardData` is `null`')
      }
      const nextValue = trimSuffix(
        computeNextValue(
          event.currentTarget,
          event.clipboardData.getData('Text')
        ),
        suffix
      )
      if (
        isValidNumericInput(nextValue, {
          integersOnly: integer
        }) === false
      ) {
        event.preventDefault()
      }
    },
    [integer, suffix]
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
      onPaste={handlePaste}
      placeholder={placeholder}
      spellcheck={false}
      tabIndex={0}
      type="text"
      value={value === MIXED_STRING ? 'Mixed' : value}
    />
  )
})

function restrictValue(value: number, minimum?: number, maximum?: number) {
  if (typeof minimum !== 'undefined') {
    if (typeof maximum !== 'undefined') {
      // both `minimum` and `maximum` are defined
      return Math.min(Math.max(value, minimum), maximum)
    }
    // only `minimum` is defined
    return Math.max(value, minimum)
  }
  if (typeof maximum !== 'undefined') {
    // only `maximum` is defined
    return Math.min(value, maximum)
  }
  // both `minimum` and `maximum` are `undefined`
  return value
}

function evaluateValue(value: string, suffix?: string): null | number {
  if (value === MIXED_STRING) {
    return MIXED_NUMBER
  }
  if (value === EMPTY_STRING) {
    return null
  }
  return evaluateNumericExpression(trimSuffix(value, suffix))
}

function evaluateValueWithDelta(value: number, delta: number): number {
  return parseFloat((value + delta).toFixed(FRACTION_DIGITS))
}

function trimSuffix(string: string, suffix?: string): string {
  if (typeof suffix === 'undefined') {
    return string
  }
  return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING)
}
