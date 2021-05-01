/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './checkbox.css'

export type CheckboxProps<N extends string> = {
  children: ComponentChildren
  disabled?: boolean
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, N>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Checkbox<N extends string>({
  children,
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, CheckboxProps<N>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = value === false
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
  )

  return (
    <label
      class={createClassName([
        styles.label,
        disabled === true ? styles.disabled : null
      ])}
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
        value={`${value}`}
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
