/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { IconCheck } from '../../icon/icon-check/icon-check'
import styles from './selectable-item.css'

export interface SelectableItemProps<T extends string> {
  bold?: boolean
  children: ComponentChildren
  disabled?: boolean
  indent?: boolean
  name?: T
  onValueChange: OnValueChange<boolean, T>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function SelectableItem<T extends string>({
  bold = false,
  children,
  disabled = false,
  indent = false,
  name,
  onValueChange,
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, SelectableItemProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function () {
      onValueChange(value === false, name)
    },
    [name, onValueChange, value]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLLabelElement> = useCallback(
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
    [name, value, onValueChange, propagateEscapeKeyDown]
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
      {value === true ? (
        <div class={styles.icon}>
          <IconCheck />
        </div>
      ) : null}
    </label>
  )
}
