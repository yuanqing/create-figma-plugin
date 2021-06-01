/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './layer.css'

export type LayerProps<Name extends string> = {
  bold?: boolean
  children: ComponentChildren
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  pageName?: string
  icon?: ComponentChildren
  color?: LayerColor
  value?: boolean
}
export type LayerColor = 'black-30' | 'black-80' | 'purple'

export function Layer<Name extends string>({
  bold = false,
  children,
  color = 'black-80',
  name,
  onChange = function () {},
  onValueChange = function () {},
  pageName,
  value = false,
  icon,
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
    <label class={createClassName([styles.layer, styles[color]])}>
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        name={name}
        onChange={handleChange}
        tabIndex={0}
        type="checkbox"
      />
      <div class={styles.fill} />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
      <div
        class={createClassName([
          styles.layerName,
          bold === true ? styles.bold : null
        ])}
      >
        {children}
      </div>
      {typeof pageName === 'undefined' ? null : (
        <div class={styles.pageName}>{pageName}</div>
      )}
    </label>
  )
}
