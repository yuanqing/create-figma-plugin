/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useLayoutEffect, useRef } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from './utilities/key-codes'
import styles from './textbox.scss'

export function Textbox ({
  focused: isFocused,
  icon,
  name,
  noBorder,
  onChange,
  style,
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
      style={style}
    >
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        class={styles.input}
        name={name}
        value={value}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />
      {hasIcon ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}
