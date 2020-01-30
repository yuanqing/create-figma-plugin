/** @jsx h */
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities/src/number'
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'
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
  disabled: isDisabled,
  focused: isFocused,
  icon,
  smallIncrement = 1,
  bigIncrement = 10,
  integer: isInteger = false,
  maximum = Number.MAX_VALUE,
  minimum = -1 * Number.MAX_VALUE,
  name,
  noBorder,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}) {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef = useRef(null)

  const handleClick = useCallback(
    function () {
      if (value === null) {
        inputElementRef.current.focus()
        inputElementRef.current.select()
      }
    },
    [value]
  )

  function handleFocus () {
    inputElementRef.current.select()
  }

  const handleInput = useCallback(
    function (event) {
      const value = inputElementRef.current.value
      onChange({ [name]: value }, value, name, event)
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
      if (keyCode === DOWN_KEY_CODE || keyCode === UP_KEY_CODE) {
        if (value === null) {
          return
        }
        event.preventDefault()
        const evaluatedValue = evaluateNumericExpression(value)
        if (
          (event.keyCode === DOWN_KEY_CODE && evaluatedValue <= minimum) ||
          (event.keyCode === UP_KEY_CODE && evaluatedValue >= maximum)
        ) {
          return
        }
        const delta = event.shiftKey === true ? bigIncrement : smallIncrement
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
        handleInput()
        handleFocus()
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue =
          value === null
            ? event.key
            : computeNextValue(inputElementRef.current, event.key)
        if (isValidNumericInput(nextValue, isInteger) === false) {
          event.preventDefault()
          return
        }
        const evaluatedValue = evaluateNumericExpression(nextValue)
        if (evaluatedValue < minimum || evaluatedValue > maximum) {
          event.preventDefault()
        }
      }
    },
    [
      bigIncrement,
      handleInput,
      isInteger,
      maximum,
      minimum,
      propagateEscapeKeyDown,
      smallIncrement,
      value
    ]
  )

  const handlePaste = useCallback(
    function (event) {
      const nextValue = computeNextValue(
        inputElementRef.current,
        event.clipboardData.getData('Text')
      )
      if (isValidNumericInput(nextValue, isInteger) === false) {
        event.preventDefault()
      }
    },
    [isInteger]
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
        value={value === null ? 'Mixed' : value}
        onClick={handleClick}
        onInput={handleInput}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        tabIndex={isDisabled === true ? null : '0'}
        data-initial-focus={isFocused === true}
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

function formatSignificantFigures (value, significantFiguresCount) {
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
