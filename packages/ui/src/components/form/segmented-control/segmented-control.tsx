/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import styles from './segmented-control.css'

const ID_DATA_ATTRIBUTE_NAME = 'data-segmented-control-id'

export type SegmentedControlProps<
  N extends string,
  V extends boolean | number | string
> = {
  disabled?: boolean
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<V, N>
  options: Array<SegmentedControlOption<V>>
  propagateEscapeKeyDown?: boolean
  value: V
}
export type SegmentedControlOption<
  V extends boolean | number | string = string
> = {
  disabled?: boolean
  children?: ComponentChildren
  value: V
}

export function SegmentedControl<
  N extends string,
  V extends boolean | number | string
>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SegmentedControlProps<N, V>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const id = event.currentTarget.getAttribute(
        ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange, options]
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
    <div class={styles.segmentedControl}>
      {options.map(function (option, index) {
        const children =
          typeof option.children === 'undefined'
            ? `${option.value}`
            : option.children
        const isOptionDisabled = disabled === true || option.disabled === true
        return (
          <label key={index} class={styles.label}>
            <input
              {...rest}
              checked={value === option.value}
              class={styles.input}
              disabled={isOptionDisabled === true}
              name={name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              tabIndex={isOptionDisabled === true ? -1 : 0}
              type="radio"
              value={`${option.value}`}
              {...{ [ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
            />
            <div class={styles.text}>{children}</div>
          </label>
        )
      })}
    </div>
  )
}
