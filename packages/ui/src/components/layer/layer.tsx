/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './layer.css'

export type LayerProps<Name extends string> = {
  bold?: boolean
  children: ComponentChildren
  component?: boolean
  description?: string
  icon: ComponentChildren
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
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
