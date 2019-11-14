/** @jsx h */
import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import styles from './textbox.scss'
import classnames from '@sindresorhus/class-names'

const UP_KEY_CODE = 38
const DOWN_KEY_CODE = 40

const nonNumericCharactersRegex = /[^\d-.]/

export function Textbox ({
  disabled,
  focused,
  icon,
  noBorder,
  onChange,
  value,
  ...rest
}) {
  rest.ref = useRef(null)
  function handleFocus () {
    const input = rest.ref.current
    input.focus()
    input.select()
  }
  function handleKeyDown (event) {
    if (event.keyCode === UP_KEY_CODE || event.keyCode === DOWN_KEY_CODE) {
      const value = event.target.value
      if (nonNumericCharactersRegex.test(value) === true) {
        // Exit if text box contains non-numeric characters
        return
      }
      const significantFiguresCount = countSignificantFigures(value)
      const number = parseFloat(value)
      event.preventDefault()
      const input = rest.ref.current
      const delta = event.shiftKey === true ? 10 : 1
      input.value = formatValue(
        event.keyCode === UP_KEY_CODE ? number + delta : number - delta,
        significantFiguresCount
      )
      onChange(event)
      input.focus()
      input.select()
    }
  }
  if (focused === true) {
    useEffect(handleFocus, [])
  }
  const withIcon = typeof icon !== 'undefined'
  return (
    <div class={styles.textbox}>
      <input
        {...rest}
        class={classnames(
          styles.input,
          noBorder ? styles.noBorder : null,
          withIcon ? styles.withIcon : null
        )}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
      {withIcon ? <div class={styles.icon}>{icon}</div> : null}
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
