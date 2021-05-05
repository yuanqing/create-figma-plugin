/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import { IconLayerComponent16 } from '../icon/icon-16/icon-layer-component-16'
import { IconLayerFrame16 } from '../icon/icon-16/icon-layer-frame-16'
import styles from './layer.css'

const icons = {
  component: <IconLayerComponent16 />,
  frame: <IconLayerFrame16 />
}

export type LayerProps<N extends string> = {
  children: ComponentChildren
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, N>
  pageName?: string
  type: LayerType
  value?: boolean
}
export type LayerType = 'frame' | 'component'

export function Layer<N extends string>({
  children,
  name,
  onChange = function () {},
  onValueChange = function () {},
  pageName,
  value = false,
  type,
  ...rest
}: Props<HTMLInputElement, LayerProps<N>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const newValue = event.currentTarget.checked
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange]
  )

  return (
    <label class={createClassName([styles.layer, styles[type]])}>
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        name={name}
        onChange={handleChange}
        tabIndex={0}
        type="checkbox"
      />
      <div class={styles.fill}></div>
      <div class={styles.icon}>{icons[type]}</div>
      <div class={styles.layerName}>{children}</div>
      {typeof pageName === 'undefined' ? null : (
        <div class={styles.pageName}>{pageName}</div>
      )}
    </label>
  )
}
