/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './toggle.css'

export type ToggleProps<N extends string> = {
  disabled?: boolean
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, N>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Toggle<N extends string>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, ToggleProps<N>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const newValue = event.currentTarget.checked
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
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
      />
      <div class={styles.box} />
      <div class={styles.switch} />
    </label>
  )
}
