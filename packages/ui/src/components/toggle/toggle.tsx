/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './toggle.css'

export type ToggleProps<Name extends string> = {
  disabled?: boolean
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Toggle<Name extends string>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, ToggleProps<Name>>): JSX.Element {
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
        styles.toggle,
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
