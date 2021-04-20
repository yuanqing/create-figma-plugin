/** @jsx h */
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities/lib/number'
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX, RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import type { OnChange, Props } from '../../../../types'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  UP_KEY_CODE
} from '../../../../utilities/key-codes'
import styles from '../textbox.css'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import { TEXTBOX_MIXED_VALUE } from '../utilities/textbox-mixed-value'

export interface TextboxNumericProps<T extends string> {
  disabled?: boolean
  icon?: ComponentChildren
  incrementBig?: number
  incrementSmall?: number
  integer?: boolean
  maximum?: number
  minimum?: number
  name?: T
  noBorder?: boolean
  onChange: OnChange<typeof TEXTBOX_MIXED_VALUE | string, T>
  onNumberChange?: (value: null | number, name?: T) => void
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: typeof TEXTBOX_MIXED_VALUE | string
}

const nonDigitRegex = /[^\d.]/

export function TextboxNumeric<T extends string>({
  disabled = false,
  icon,
  incrementBig = 10,
  incrementSmall = 1,
  integer = false,
  maximum,
  minimum,
  name,
  noBorder = false,
  onChange,
  onNumberChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TextboxNumericProps<T>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      getCurrentFromRef(inputElementRef).select()
    },
    []
  )

  const handleInput: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const newValue = getCurrentFromRef(inputElementRef).value
      onChange(newValue, name, event)
    },
    [name, onChange]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      const inputElement = getCurrentFromRef(inputElementRef)
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        inputElement.blur()
        return
      }
      if (keyCode === DOWN_KEY_CODE || keyCode === UP_KEY_CODE) {
        event.preventDefault()
        if (value === TEXTBOX_MIXED_VALUE) {
          const delta = event.shiftKey === true ? incrementBig : incrementSmall
          let newValue: number
          if (typeof minimum === 'undefined') {
            if (keyCode === DOWN_KEY_CODE) {
              // decrement by `delta`
              newValue = 0 - delta
            } else {
              // increment by `delta`
              newValue = 0 + delta
            }
          } else {
            if (keyCode === DOWN_KEY_CODE) {
              // can't go below minimum
              newValue = minimum
            } else {
              // increment by `delta` above the `minimum`
              newValue = minimum + delta
            }
          }
          const formattedValue = `${newValue}`
          inputElement.value = formattedValue
          inputElement.select()
          onChange(formattedValue, name, event)
          return
        }
        const evaluatedValue = evaluateNumericExpression(value)
        if (evaluatedValue === null) {
          return
        }
        if (
          (event.keyCode === DOWN_KEY_CODE &&
            typeof minimum !== 'undefined' &&
            evaluatedValue <= minimum) ||
          (event.keyCode === UP_KEY_CODE &&
            typeof maximum !== 'undefined' &&
            evaluatedValue >= maximum)
        ) {
          return
        }
        const delta = event.shiftKey === true ? incrementBig : incrementSmall
        const newValue =
          event.keyCode === DOWN_KEY_CODE
            ? typeof minimum === 'undefined'
              ? evaluatedValue - delta
              : Math.max(evaluatedValue - delta, minimum)
            : typeof maximum === 'undefined'
            ? evaluatedValue + delta
            : Math.min(evaluatedValue + delta, maximum)
        const significantFiguresCount = countSignificantFigures(
          nonDigitRegex.test(value) === true ? `${evaluatedValue}` : value
        )
        const formattedValue = formatSignificantFigures(
          newValue,
          significantFiguresCount
        )
        inputElement.value = formattedValue
        inputElement.select()
        onChange(formattedValue, name, event)
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue =
          value === TEXTBOX_MIXED_VALUE
            ? event.key
            : computeNextValue(inputElement, event.key)
        if (
          isValidNumericInput(nextValue, { integersOnly: integer }) === false
        ) {
          event.preventDefault()
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
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      name,
      onChange,
      propagateEscapeKeyDown,
      value
    ]
  )

  const handlePaste: JSX.ClipboardEventHandler<HTMLInputElement> = useCallback(
    function (event: ClipboardEvent) {
      if (event.clipboardData === null) {
        throw new Error('`event.clipboardData` is `null`')
      }
      const nextValue = computeNextValue(
        getCurrentFromRef(inputElementRef),
        event.clipboardData.getData('Text')
      )
      if (isValidNumericInput(nextValue, { integersOnly: integer }) === false) {
        event.preventDefault()
      }
    },
    [integer]
  )

  useEffect(
    function () {
      if (typeof onNumberChange === 'undefined') {
        return
      }
      if (value === TEXTBOX_MIXED_VALUE) {
        onNumberChange(null, name)
        return
      }
      const evaluatedValue = evaluateNumericExpression(value)
      onNumberChange(evaluatedValue, name)
    },
    [name, onNumberChange, value]
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
        ref={inputElementRef}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type="text"
        value={value === TEXTBOX_MIXED_VALUE ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
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
