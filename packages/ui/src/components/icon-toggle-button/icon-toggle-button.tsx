import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types.js'
import { createClassName } from '../../utilities/create-class-name.js'
import styles from './icon-toggle-button.module.css'

export type IconToggleButtonProps<Name extends string> = {
  children: ComponentChildren
  disabled?: boolean
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function IconToggleButton<Name extends string>({
  children,
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, IconToggleButtonProps<Name>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange(!value, name)
      onChange(event)
    },
    [name, onChange, onValueChange, value]
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
        styles.iconToggleButton,
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
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        tabIndex={disabled === true ? -1 : 0}
        type="checkbox"
      />
      <div class={styles.box}>
        <div class={styles.icon}>{children}</div>
      </div>
    </label>
  )
}
