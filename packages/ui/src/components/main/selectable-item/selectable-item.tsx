/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import { iconCheck } from '../../icon/icon-check/icon-check'
import styles from './selectable-item.css'

export interface SelectableItemProps {
  bold?: boolean
  children: ComponentChildren
  disabled?: boolean
  indent?: boolean
  name?: string
  onChange: OnChange<boolean>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function SelectableItem({
  bold = false,
  children,
  disabled = false,
  indent = false,
  name,
  onChange,
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, SelectableItemProps>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      onChange(value === false, name, event)
    },
    [name, onChange, value]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLLabelElement> = useCallback(
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
    [name, value, onChange, propagateEscapeKeyDown]
  )

  return (
    <label
      class={classnames(
        styles.label,
        disabled === true ? styles.disabled : null,
        bold === true ? styles.bold : null,
        indent === true ? styles.indent : null,
        value === true ? styles.checked : null
      )}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? -1 : 0}
    >
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onChange={handleChange}
        tabIndex={-1}
        type="checkbox"
      />
      <div class={styles.text}>{children}</div>
      {value === true ? <div class={styles.icon}>{iconCheck}</div> : null}
    </label>
  )
}
