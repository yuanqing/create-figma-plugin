/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnValueChange, Props } from '../../../types'
import styles from './checkbox.css'

export interface CheckboxProps<T extends string> {
  children: ComponentChildren
  disabled?: boolean
  name?: T
  onValueChange: OnValueChange<boolean, T>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Checkbox<T extends string>({
  children,
  disabled = false,
  name,
  onValueChange,
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, CheckboxProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function () {
      const newValue = value === false
      onValueChange(newValue, name)
    },
    [name, onValueChange, value]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      switch (event.key) {
        case 'Escape': {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          ;(event.target as HTMLElement).blur()
          break
        }
        case 'Enter': {
          event.stopPropagation()
          const newValue = value === false
          onValueChange(newValue, name)
          break
        }
      }
    },
    [name, onValueChange, propagateEscapeKeyDown, value]
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
