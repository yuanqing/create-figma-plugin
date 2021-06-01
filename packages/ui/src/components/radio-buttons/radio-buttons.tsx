/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import { Stack, StackSpace } from '../layout/stack/stack'
import styles from './radio-buttons.css'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-radio-buttons-item-id'

export type RadioButtonsProps<
  Name extends string,
  Value extends boolean | number | string
> = {
  disabled?: boolean
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<Value, Name>
  options: Array<RadioButtonsOption<Value>>
  propagateEscapeKeyDown?: boolean
  space?: StackSpace
  value: null | Value
}
export type RadioButtonsOption<
  Value extends boolean | number | string = string
> = {
  disabled?: boolean
  children?: ComponentChildren
  value: Value
}

export function RadioButtons<
  Name extends string,
  Value extends boolean | number | string
>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  space = 'small',
  value,
  ...rest
}: Props<HTMLInputElement, RadioButtonsProps<Name, Value>>): JSX.Element {
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
    <div class={styles.radioButtons}>
      <Stack space={space}>
        {options.map(function (
          option: RadioButtonsOption<Value>,
          index: number
        ): JSX.Element {
          const children =
            typeof option.children === 'undefined'
              ? `${option.value}`
              : option.children
          const isOptionDisabled = disabled === true || option.disabled === true
          return (
            <label
              key={index}
              class={createClassName([
                styles.label,
                isOptionDisabled === true ? styles.disabled : null
              ])}
            >
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
              <div class={styles.fill} />
              <div class={styles.border} />
              <div class={styles.children}>{children}</div>
            </label>
          )
        })}
      </Stack>
    </div>
  )
}
