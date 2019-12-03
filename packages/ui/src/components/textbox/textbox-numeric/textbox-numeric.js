/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useLayoutEffect, useRef } from 'preact/hooks'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  UP_KEY_CODE
} from '../utilities/key-codes'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import { numericInputRegex } from '../utilities/numeric-input-regex'
import '../../../scss/base.scss'
import styles from '../textbox.scss'

export function TextboxNumeric ({
  focused: isFocused,
  icon,
  name,
  noBorder,
  onChange,
  value,
  ...rest
}) {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef = useRef(null)

  function handleFocus () {
    inputElementRef.current.select()
  }

  function handleInput () {
    onChange(inputElementRef.current.value, name)
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === ESCAPE_KEY_CODE) {
      event.stopPropagation()
      inputElementRef.current.blur()
      return
    }
    if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
      event.preventDefault()
      const value = inputElementRef.current.value
      const number = parseFloat(value)
      const delta = event.shiftKey === true ? 10 : 1
      const significantFiguresCount = countSignificantFigures(value)
      inputElementRef.current.value = formatValue(
        event.keyCode === UP_KEY_CODE ? number + delta : number - delta,
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
      if (numericInputRegex.test(nextValue) === false) {
        event.preventDefault()
      }
    }
  }

  function handlePaste (event) {
    const nextValue = computeNextValue(
      inputElementRef.current,
      event.clipboardData.getData('Text')
    )
    if (numericInputRegex.test(nextValue) === false) {
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
        class={styles.input}
        name={name}
        value={value}
        onInput={handleInput}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
      />
      {hasIcon ? <div class={styles.icon}>{icon}</div> : null}
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
    return value
  }
  const result = fractionalPartRegex.exec(`${value}`)
  if (result === null) {
    return `${value}.${'0'.repeat(significantFiguresCount)}`
  }
  const fractionalPart = result[1]
  const count = significantFiguresCount - fractionalPart.length
  return `${value}${'0'.repeat(count)}`
}
