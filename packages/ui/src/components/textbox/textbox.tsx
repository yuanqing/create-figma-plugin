/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import type { RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import type { OnChange, Props } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import styles from './textbox.css'
import { renderTextboxValueToString } from './utilities/render-textbox-value-to-string'
import { TEXTBOX_MIXED_VALUE } from './utilities/textbox-mixed-value'

export interface TextboxProps<Key extends string> {
  disabled?: boolean
  focused?: boolean
  icon?: ComponentChildren
  name: Key
  noBorder?: boolean
  onChange: OnChange<null | typeof TEXTBOX_MIXED_VALUE | string, Key>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  type?: 'text' | 'password'
  value: null | typeof TEXTBOX_MIXED_VALUE | string
}

export function Textbox<Key extends string>({
  disabled,
  focused,
  icon,
  name,
  noBorder,
  onChange,
  placeholder,
  propagateEscapeKeyDown = true,
  type = 'text',
  value,
  ...rest
}: Props<HTMLInputElement, TextboxProps<Key>>): JSX.Element {
  const hasIcon = typeof icon !== 'undefined'

  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

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
      onChange(
        { [name]: newValue } as { [k in Key]: string },
        newValue,
        name,
        event
      )
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
        class={styles.input}
        data-initial-focus={focused === true}
        disabled={disabled === true}
        name={name}
        onClick={handleClick}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        tabIndex={disabled === true ? undefined : 0}
        type={type}
        value={renderTextboxValueToString(value)}
      />
      {hasIcon ? <div class={styles.icon}>{icon}</div> : null}
    </div>
  )
}
