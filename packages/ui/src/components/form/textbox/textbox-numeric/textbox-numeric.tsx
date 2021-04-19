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
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  UP_KEY_CODE
} from '../../../../utilities/key-codes'
import styles from '../textbox.css'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import { TEXTBOX_MIXED_VALUE } from '../utilities/textbox-mixed-value'

export interface TextboxNumericProps {
  disabled?: boolean
  icon?: ComponentChildren
  incrementBig?: number
  incrementSmall?: number
  integer?: boolean
  maximum?: number
  minimum?: number
  name?: string
  noBorder?: boolean
  onChange: OnChange<typeof TEXTBOX_MIXED_VALUE | string>
  onNumberChange?: (value: null | number, name?: string) => void
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: typeof TEXTBOX_MIXED_VALUE | string
}

const nonDigitRegex = /[^\d.]/

export function TextboxNumeric({
  disabled = false,
  icon,
  incrementBig = 10,
  incrementSmall = 1,
  integer = false,
  maximum = Number.MAX_VALUE,
  minimum = -1 * Number.MAX_VALUE,
  name,
  noBorder = false,
  onChange,
  onNumberChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TextboxNumericProps>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      inputElementRef.current.select()
    },
    []
  )

  const handleInput: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const value = inputElementRef.current.value
      onChange(value, name, event)
    },
    [name, onChange]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        inputElementRef.current.blur()
        return
      }
      if (keyCode === DOWN_KEY_CODE || keyCode === UP_KEY_CODE) {
        if (value === TEXTBOX_MIXED_VALUE) {
          inputElementRef.current.value = '0'
          onChange(value, name, event)
          inputElementRef.current.select()
          return
        }
        event.preventDefault()
        const evaluatedValue = evaluateNumericExpression(value)
        if (evaluatedValue === null) {
          return
        }
        if (
          (event.keyCode === DOWN_KEY_CODE && evaluatedValue <= minimum) ||
          (event.keyCode === UP_KEY_CODE && evaluatedValue >= maximum)
        ) {
          return
        }
        const delta = event.shiftKey === true ? incrementBig : incrementSmall
        const newValue =
          event.keyCode === DOWN_KEY_CODE
            ? Math.max(evaluatedValue - delta, minimum)
            : Math.min(evaluatedValue + delta, maximum)
        const significantFiguresCount = countSignificantFigures(
          nonDigitRegex.test(value) === true ? `${evaluatedValue}` : value
        )
        inputElementRef.current.value = formatSignificantFigures(
          newValue,
          significantFiguresCount
        )
        onChange(value, name, event)
        inputElementRef.current.select()
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue =
          value === TEXTBOX_MIXED_VALUE
            ? event.key
            : computeNextValue(inputElementRef.current, event.key)
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
        if (evaluatedValue < minimum || evaluatedValue > maximum) {
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
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      if (event.clipboardData === null) {
        throw new Error('`event.clipboardData` is `null`')
      }
      const nextValue = computeNextValue(
        inputElementRef.current,
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
        tabIndex={disabled === true ? -1 : undefined}
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
