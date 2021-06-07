/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './segmented-control.css'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-segmented-control-item-id'

export type SegmentedControlProps<
  Name extends string,
  Value extends boolean | number | string
> = {
  disabled?: boolean
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<Value, Name>
  options: Array<SegmentedControlOption<Value>>
  propagateEscapeKeyDown?: boolean
  value: Value
}
export type SegmentedControlOption<
  Value extends boolean | number | string = string
> = {
  disabled?: boolean
  children?: ComponentChildren
  value: Value
}

export function SegmentedControl<
  Name extends string,
  Value extends boolean | number | string
>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SegmentedControlProps<Name, Value>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange, options]
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
    <div
      class={createClassName([
        styles.segmentedControl,
        disabled === true ? styles.disabled : null
      ])}
    >
      <div class={styles.labels}>
        {options.map(function (
          option: SegmentedControlOption<Value>,
          index: number
        ): JSX.Element {
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
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
              />
              <div class={styles.children}>
                <div
                  class={typeof children === 'string' ? styles.text : undefined}
                >
                  {children}
                </div>
              </div>
            </label>
          )
        })}
      </div>
      <div class={styles.border} />
    </div>
  )
}
