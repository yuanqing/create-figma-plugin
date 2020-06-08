/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import styles from './textbox.scss'

export interface TextboxProps {
  disabled?: boolean
  focused?: boolean
  icon?: preact.ComponentChildren
  name: string
  noBorder?: boolean
  onChange: OnChange
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: null | string
}

export function Textbox({
  disabled,
  focused,
  icon,
  name,
  noBorder,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: TextboxProps): h.JSX.Element {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef: preact.RefObject<HTMLInputElement> = useRef(null)

  const handleClick = useCallback(
    function () {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      if (value === null) {
        inputElementRef.current.focus()
        inputElementRef.current.select()
      }
    },
    [value]
  )

  function handleFocus() {
    if (
      inputElementRef.current === null ||
      typeof inputElementRef.current === 'undefined'
    ) {
      return
    }
    inputElementRef.current.select()
  }

  const handleInput = useCallback(
    function (event: Event) {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const newValue = inputElementRef.current.value
      onChange({ [name]: newValue }, newValue, name, event)
    },
    [name, onChange]
  )

  function handleKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode
    if (keyCode === ESCAPE_KEY_CODE) {
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      inputElementRef.current.blur()
    }
  }

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
        type="text"
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={value === null ? 'Mixed' : value}
        disabled={disabled === true}
        onClick={handleClick}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? undefined : 0}
        data-initial-focus={focused === true}
      />
      {hasIcon ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}
