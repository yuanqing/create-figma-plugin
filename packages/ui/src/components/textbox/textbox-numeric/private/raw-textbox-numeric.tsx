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

const EMPTY_STRING = ''
const nonDigitRegex = /[^\d.]/

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
  value,
  ...rest
}: Props<HTMLInputElement, RawTextboxNumericProps<Name>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const restrictValue = useCallback(
    function (value: number) {
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
    },
    [maximum, minimum]
  )

  const handleBlur = useCallback(
    function (): void {
      if (typeof suffix !== 'undefined') {
        const inputElement = getCurrentFromRef(inputElementRef)
        let newValue: null | string = null
        if (value === suffix) {
          // We don't want a textbox to contain just the `suffix`, so clear the `value`
          newValue = EMPTY_STRING
        }
        if (value !== MIXED_STRING && hasSuffix(value, suffix) === false) {
          // Need to add the `suffix` to `value`
          newValue = appendSuffix(value, suffix)
        }
        if (newValue !== null) {
          inputElement.value = newValue
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          inputElement.dispatchEvent(inputEvent)
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [value, suffix]
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
      if (value === MIXED_STRING) {
        onNumericValueInput(MIXED_NUMBER, name)
        return
      }
      if (value === EMPTY_STRING) {
        onNumericValueInput(null, name)
        return
      }
      const evaluatedValue = evaluateNumericExpression(
        trimSuffix(value, suffix)
      )
      if (evaluatedValue === null) {
        throw new Error('Invariant violation') // `value` is a valid numeric expression
      }
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
          event.currentTarget.value = originalValue
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          event.currentTarget.dispatchEvent(inputEvent)
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
          const startingValue =
            key === 'ArrowDown'
              ? typeof maximum === 'undefined'
                ? 0
                : maximum
              : typeof minimum === 'undefined'
              ? 0
              : minimum
          const newValue = restrictValue(
            key === 'ArrowDown' ? startingValue - delta : startingValue + delta
          )
          const formattedValue = appendSuffix(`${newValue}`, suffix)
          element.value = formattedValue
          element.select()
          handleInput(event)
          return
        }
        const evaluatedValue = evaluateNumericExpression(
          trimSuffix(value, suffix)
        )
        if (evaluatedValue === null) {
          throw new Error('Invariant violation') // `value` is a valid numeric expression
        }
        event.preventDefault()
        const newValue = restrictValue(
          key === 'ArrowDown' ? evaluatedValue - delta : evaluatedValue + delta
        )
        const significantFiguresCount = countSignificantFigures(
          nonDigitRegex.test(value) === true ? `${evaluatedValue}` : value
        )
        const formattedValue = appendSuffix(
          formatSignificantFigures(newValue, significantFiguresCount),
          suffix
        )
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
        const evaluatedValue = evaluateNumericExpression(nextValue)
        if (evaluatedValue === null) {
          throw new Error('Invariant violation') // `nextValue` is a valid numeric expression
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
      restrictValue,
      revertOnEscapeKeyDown,
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
      const nextValue = computeNextValue(
        event.currentTarget,
        event.clipboardData.getData('Text')
      )
      if (
        isValidNumericInput(trimSuffix(nextValue, suffix), {
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

const fractionalPartRegex = /\.([^.]+)/

function countSignificantFigures(value: string): number {
  const result = fractionalPartRegex.exec(value)
  if (result === null) {
    return 0
  }
  return result[1].length
}

function formatSignificantFigures(
  value: number,
  significantFiguresCount: number
): string {
  if (significantFiguresCount === 0) {
    return `${value}`
  }
  const result = fractionalPartRegex.exec(`${value}`)
  if (result === null) {
    return `${value}.${'0'.repeat(significantFiguresCount)}`
  }
  const fractionalPart = result[1]
  const count = significantFiguresCount - fractionalPart.length
  return `${value}${'0'.repeat(count)}`
}

function appendSuffix(string: string, suffix: undefined | string) {
  if (typeof suffix === 'undefined') {
    return string
  }
  if (string === EMPTY_STRING) {
    return EMPTY_STRING
  }
  return `${string}${suffix}`
}

function trimSuffix(string: string, suffix: undefined | string): string {
  if (typeof suffix === 'undefined') {
    return string
  }
  return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING)
}

function hasSuffix(string: string, suffix: string): boolean {
  return new RegExp(`${suffix}$`).test(string)
}
