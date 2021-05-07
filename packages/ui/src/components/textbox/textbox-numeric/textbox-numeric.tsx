/** @jsx h */
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities'
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { MIXED_NUMBER, MIXED_STRING } from '../../../utilities/mixed-values'
import { computeNextValue } from '../private/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../private/is-keycode-character-generating'
import textboxStyles from '../textbox/textbox.css'

const EMPTY_STRING = ''
const nonDigitRegex = /[^\d.]/

export type TextboxNumericProps<N extends string> = {
  disabled?: boolean
  icon?: ComponentChildren
  incrementBig?: number
  incrementSmall?: number
  integer?: boolean
  maximum?: number
  minimum?: number
  name?: N
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<string, N>
  onNumericValueChange?: OnValueChange<null | number, N>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  suffix?: string
  value: string
}

export function TextboxNumeric<N extends string>({
  disabled = false,
  icon,
  incrementBig = 10,
  incrementSmall = 1,
  integer = false,
  maximum,
  minimum,
  name,
  noBorder = false,
  onInput = function () {},
  onNumericValueChange = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  suffix,
  value,
  ...rest
}: Props<HTMLInputElement, TextboxNumericProps<N>>): JSX.Element {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const handleBlur = useCallback(
    function (): void {
      if (typeof suffix !== 'undefined') {
        let newValue: null | string = null
        if (value === suffix) {
          // We don't want a textbox to contain just the `suffix`, so clear the `value`
          newValue = EMPTY_STRING
        }
        if (hasSuffix(value, suffix) === false) {
          // Need to add the `suffix` to `value`
          newValue = appendSuffix(value, suffix)
        }
        if (newValue !== null) {
          const inputElement = getCurrentFromRef(inputElementRef)
          inputElement.value = newValue
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          inputElement.dispatchEvent(inputEvent)
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [suffix, value]
  )

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueChange]
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
        event.preventDefault()
        if (value === MIXED_STRING) {
          const delta = event.shiftKey === true ? incrementBig : incrementSmall
          let newValue: number
          if (typeof minimum === 'undefined') {
            if (key === 'ArrowDown') {
              // decrement by `delta`
              newValue = 0 - delta
            } else {
              // increment by `delta`
              newValue = 0 + delta
            }
          } else {
            if (key === 'ArrowDown') {
              // can't go below minimum
              newValue = minimum
            } else {
              // increment by `delta` above the `minimum`
              newValue = minimum + delta
            }
          }
          const formattedValue = appendSuffix(`${newValue}`, suffix)
          element.value = formattedValue
          element.select()
          onValueChange(formattedValue, name)
          onInput(event)
          return
        }
        const evaluatedValue = evaluateNumericExpression(
          trimSuffix(value, suffix)
        )
        if (evaluatedValue === null) {
          return
        }
        if (
          (key === 'ArrowDown' &&
            typeof minimum !== 'undefined' &&
            evaluatedValue <= minimum) ||
          (key === 'ArrowUp' &&
            typeof maximum !== 'undefined' &&
            evaluatedValue >= maximum)
        ) {
          return
        }
        const delta = event.shiftKey === true ? incrementBig : incrementSmall
        const newValue =
          key === 'ArrowDown'
            ? typeof minimum === 'undefined'
              ? evaluatedValue - delta
              : Math.max(evaluatedValue - delta, minimum)
            : typeof maximum === 'undefined'
            ? evaluatedValue + delta
            : Math.min(evaluatedValue + delta, maximum)
        const significantFiguresCount = countSignificantFigures(
          nonDigitRegex.test(value) === true ? `${evaluatedValue}` : value
        )
        const formattedValue = appendSuffix(
          formatSignificantFigures(newValue, significantFiguresCount),
          suffix
        )
        element.value = formattedValue
        element.select()
        onValueChange(formattedValue, name)
        onInput(event)
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        // Piece together `newValue`, and stop the `keyDown` event if `newValue` is invalid
        const newValue = trimSuffix(
          value === MIXED_STRING
            ? event.key
            : computeNextValue(element, event.key),
          suffix
        )
        if (
          isValidNumericInput(newValue, { integersOnly: integer }) === false
        ) {
          event.preventDefault()
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
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      name,
      onInput,
      onValueChange,
      originalValue,
      propagateEscapeKeyDown,
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

  useEffect(
    function () {
      // Call `onNumericValueChange` if `value` is a valid numeric value
      if (value === MIXED_STRING) {
        onNumericValueChange(MIXED_NUMBER, name)
        return
      }
      const evaluatedValue = evaluateNumericExpression(
        trimSuffix(value, suffix)
      )
      onNumericValueChange(evaluatedValue, name)
    },
    [name, onNumericValueChange, suffix, value]
  )

  return (
    <div
      class={createClassName([
        textboxStyles.textbox,
        noBorder === true ? textboxStyles.noBorder : null,
        typeof icon === 'undefined' ? null : textboxStyles.hasIcon
      ])}
    >
      <input
        {...rest}
        ref={inputElementRef}
        class={textboxStyles.input}
        disabled={disabled === true}
        name={name}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        onPaste={handlePaste}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type="text"
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={textboxStyles.icon}>{icon}</div>
      )}
      <div class={textboxStyles.border} />
    </div>
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
