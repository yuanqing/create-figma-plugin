/** @jsx h */
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities/src/number'
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useLayoutEffect, useRef } from 'preact/hooks'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  UP_KEY_CODE
} from '../../../utilities/key-codes'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import '../../../scss/base.scss'
import styles from '../textbox.scss'

const nonDigitRegex = /[^\d.]/

export function TextboxNumeric ({
  focused: isFocused,
  icon,
  name,
  noBorder,
  onChange,
  placeholder,
  propagateEscapeKeyDown = false,
  value,
  ...rest
}) {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef = useRef(null)

  function handleFocus () {
    inputElementRef.current.select()
  }

  const handleInput = useCallback(
    function () {
      onChange({ [name]: inputElementRef.current.value })
    },
    [name, onChange]
  )

  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        inputElementRef.current.blur()
        return
      }
      if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
        event.preventDefault()
        const value = inputElementRef.current.value
        const parsedValue = evaluateNumericExpression(value)
        const delta = event.shiftKey === true ? 10 : 1
        const significantFiguresCount = countSignificantFigures(
          nonDigitRegex.test(value) === true ? `${parsedValue}` : value
        )
        inputElementRef.current.value = formatValue(
          event.keyCode === UP_KEY_CODE
            ? parsedValue + delta
            : parsedValue - delta,
          significantFiguresCount
        )
        handleInput()
        handleFocus()
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue = computeNextValue(inputElementRef.current, event.key)
        if (isValidNumericInput(nextValue) === false) {
          event.preventDefault()
        }
      }
    },
    [handleInput, propagateEscapeKeyDown]
  )

  function handlePaste (event) {
    const nextValue = computeNextValue(
      inputElementRef.current,
      event.clipboardData.getData('Text')
    )
    if (isValidNumericInput(nextValue) === false) {
      event.preventDefault()
    }
  }

  useLayoutEffect(
    function () {
      if (isFocused === true) {
        handleFocus()
      }
    },
    [isFocused]
  )

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        hasIcon === true ? styles.hasIcon : null
      )}
    >
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={value === null ? '' : value}
        onInput={handleInput}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
      />
      {hasIcon === true ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}

const fractionalPartRegex = /\.([^.]+)/

function countSignificantFigures (value) {
  const result = fractionalPartRegex.exec(value)
  if (result === null) {
    return 0
  }
  return result[1].length
}

function formatValue (value, significantFiguresCount) {
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
