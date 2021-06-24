/** @jsx h */
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../../types/types'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref'
import { MIXED_NUMBER, MIXED_STRING } from '../../../../utilities/mixed-values'
import { computeNextValue } from '../../private/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../../private/is-keycode-character-generating'
import { formatEvaluatedValue } from './format-evaluated-value'

const EMPTY_STRING = ''

export type RawTextboxNumericProps<Name extends string> = {
  disabled?: boolean
  incrementBig?: number
  incrementSmall?: number
  integer?: boolean
  maximum?: number
  minimum?: number
  name?: Name
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onNumericValueInput?: OnValueChange<null | number, Name>
  onValueInput?: OnValueChange<string, Name>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  suffix?: string
  validateOnBlur?: (value: null | number) => null | number | boolean
  value: string
}

export function RawTextboxNumeric<Name extends string>({
  disabled = false,
  incrementBig = 10,
  incrementSmall = 1,
  integer = false,
  maximum,
  minimum,
  name,
  onInput = function () {},
  onNumericValueInput = function () {},
  onValueInput = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  suffix,
  validateOnBlur,
  value,
  ...rest
}: Props<HTMLInputElement, RawTextboxNumericProps<Name>>): JSX.Element {
  if (
    typeof minimum !== 'undefined' &&
    typeof maximum !== 'undefined' &&
    minimum >= maximum
  ) {
    throw new Error('`minimum` must be less than `maximum`')
  }

  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const isRevertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const setInputElementValue = useCallback(function (value: string): void {
    const inputElement = getCurrentFromRef(inputElementRef)
    inputElement.value = value
    const inputEvent = document.createEvent('Event')
    inputEvent.initEvent('input', true, true)
    inputElement.dispatchEvent(inputEvent)
  }, [])

  const handleBlur = useCallback(
    function (): void {
      if (isRevertOnEscapeKeyDownRef.current === true) {
        isRevertOnEscapeKeyDownRef.current = false
        return
      }
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
    [originalValue, setInputElementValue, suffix, validateOnBlur, value]
  )

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onInput(event)
      const value = event.currentTarget.value
      onValueInput(value, name)
      const evaluatedValue = evaluateValue(value, suffix)
      onNumericValueInput(evaluatedValue, name)
    },
    [name, onInput, onNumericValueInput, onValueInput, suffix]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      const key = event.key
      if (key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          isRevertOnEscapeKeyDownRef.current = true
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
      const element = event.currentTarget
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        const delta = event.shiftKey === true ? incrementBig : incrementSmall
        if (value === EMPTY_STRING || value === MIXED_STRING) {
          event.preventDefault()
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
          const newValue = restrictValue(
            key === 'ArrowDown' ? startingValue - delta : startingValue + delta,
            minimum,
            maximum
          )
          const formattedValue = formatEvaluatedValue(newValue, value, suffix)
          element.value = formattedValue
          element.select()
          handleInput(event)
          return
        }
        const evaluatedValue = evaluateValue(value, suffix)
        if (evaluatedValue === null) {
          throw new Error('Invariant violation') // `value` is a valid numeric expression
        }
        event.preventDefault()
        const newValue = restrictValue(
          key === 'ArrowDown' ? evaluatedValue - delta : evaluatedValue + delta,
          minimum,
          maximum
        )
        const formattedValue = formatEvaluatedValue(newValue, value, suffix)
        if (formattedValue === value) {
          return
        }
        element.value = formattedValue
        element.select()
        handleInput(event)
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        // Piece together `nextValue` using the key that was pressed, and stop
        // the `keyDown` event (by calling `event.preventDefault()`) if
        // `newValue` is found to be invalid
        const nextValue = trimSuffix(
          value === MIXED_STRING
            ? event.key
            : computeNextValue(element, event.key),
          suffix
        )
        if (
          isValidNumericInput(nextValue, { integersOnly: integer }) === false
        ) {
          event.preventDefault()
          return
        }
        if (typeof minimum === 'undefined' && typeof maximum === 'undefined') {
          return
        }
        const evaluatedValue = evaluateNumericExpression(nextValue)
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
      handleInput,
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      suffix,
      value
    ]
  )

  const handleMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>): void {
      if (value !== MIXED_STRING) {
        return
      }
      event.preventDefault()
    },
    [value]
  )

  const handlePaste = useCallback(
    function (event: JSX.TargetedClipboardEvent<HTMLInputElement>): void {
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
      onPaste={handlePaste}
      placeholder={placeholder}
      spellcheck={false}
      tabIndex={disabled === true ? -1 : 0}
      type="text"
      value={value === MIXED_STRING ? 'Mixed' : value}
    />
  )
}

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

function trimSuffix(string: string, suffix?: string): string {
  if (typeof suffix === 'undefined') {
    return string
  }
  return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING)
}
