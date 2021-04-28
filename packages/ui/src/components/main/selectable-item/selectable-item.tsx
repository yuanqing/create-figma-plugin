/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange, OnValueChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { IconCheck } from '../../icon/icon-check/icon-check'
import styles from './selectable-item.css'

export interface SelectableItemProps<T extends string> {
  bold?: boolean
  children: ComponentChildren
  disabled?: boolean
  indent?: boolean
  name?: T
  onChange?: OnChange<HTMLInputElement>
  onValueChange?: OnValueChange<boolean, T>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function SelectableItem<T extends string>({
  bold = false,
  children,
  disabled = false,
  indent = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, SelectableItemProps<T>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onValueChange(value === false, name, value)
      onChange(event)
    },
    [name, onChange, onValueChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLLabelElement>) {
      switch (event.key) {
        case 'Escape': {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          event.currentTarget.blur()
          break
        }
        case 'Enter': {
          event.stopPropagation()
          const newValue = value === false
          onValueChange(newValue, name, value)
          onChange({
            ...event,
            currentTarget: getCurrentFromRef(inputElementRef)
          })
          break
        }
      }
    },
    [name, value, onChange, onValueChange, propagateEscapeKeyDown]
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
        ref={inputElementRef}
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
