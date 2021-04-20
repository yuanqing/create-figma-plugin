/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import styles from './checkbox.css'

export interface CheckboxProps<T extends string> {
  children: ComponentChildren
  disabled?: boolean
  name?: T
  onChange: OnChange<boolean, T>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Checkbox<T extends string>({
  children,
  disabled = false,
  name,
  onChange,
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, CheckboxProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const newValue = value === false
      onChange(newValue, name, event)
    },
    [name, onChange, value]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      switch (event.keyCode) {
        case ESCAPE_KEY_CODE: {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          ;(event.target as HTMLElement).blur()
          break
        }
        case ENTER_KEY_CODE: {
          event.stopPropagation()
          const newValue = value === false
          onChange(newValue, name, event)
          break
        }
      }
    },
    [name, onChange, propagateEscapeKeyDown, value]
  )

  return (
    <label
      class={classnames(
        styles.label,
        disabled === true ? styles.disabled : null
      )}
    >
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? -1 : 0}
        type="checkbox"
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
