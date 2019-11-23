/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { DOWN_KEY_CODE, ESCAPE_KEY_CODE, UP_KEY_CODE } from '../key-codes'
import styles from '../textbox.scss'

const nonNumericCharactersRegex = /[^\d-.]/

export function TextboxNumeric ({
  focused: isFocused,
  icon,
  noBorder,
  onChange,
  style,
  value,
  ...rest
}) {
  const hasIcon = typeof icon !== 'undefined'

  const inputElement = useRef(null)

  function handleFocus () {
    inputElement.current.focus()
    inputElement.current.select()
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === ESCAPE_KEY_CODE) {
      event.stopPropagation()
      inputElement.current.blur()
      return
    }
    if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
      event.preventDefault()
      const value = inputElement.current.value
      const isNonNumeric = nonNumericCharactersRegex.test(value) === true
      if (isNonNumeric === true) {
        // Exit if text box contains non-numeric characters
        return
      }
      const number = parseFloat(value)
      const delta = event.shiftKey === true ? 10 : 1
      const significantFiguresCount = countSignificantFigures(value)
      inputElement.current.value = formatValue(
        event.keyCode === UP_KEY_CODE ? number + delta : number - delta,
        significantFiguresCount
      )
      onChange(event)
      handleFocus()
    }
  }

  if (isFocused === true) {
    useEffect(handleFocus, [])
  }

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        hasIcon === true ? styles.hasIcon : null
      )}
      style={style}
    >
      <input
        {...rest}
        ref={inputElement}
        type='text'
        class={styles.input}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
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
