import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types.js'
import { createClassName } from '../../utilities/create-class-name.js'
import styles from './layer.module.css'

export type LayerProps<Name extends string> = {
  bold?: boolean
  children: ComponentChildren
  component?: boolean
  description?: string
  icon: ComponentChildren
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Layer<Name extends string>({
  bold = false,
  children,
  description,
  component = false,
  icon,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, LayerProps<Name>>): JSX.Element {
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
        styles.layer,
        bold === true ? styles.bold : null,
        component === true ? styles.component : null
      ])}
    >
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        type="checkbox"
      />
      <div class={styles.box} />
      <div class={styles.icon}>{icon}</div>
      <div class={styles.children}>{children}</div>
      {typeof description === 'undefined' ? null : (
        <div class={styles.description}>{description}</div>
      )}
    </label>
  )
}
