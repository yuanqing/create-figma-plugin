/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { Stack, StackSpace } from '../../layout/stack/stack'
import styles from './radio-buttons.css'

const ID_DATA_ATTRIBUTE_NAME = 'data-radio-buttons-id'

export type RadioButtonsProps<
  N extends string,
  V extends boolean | number | string
> = {
  disabled?: boolean
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<V, N>
  options: Array<RadioButtonsOption<V>>
  propagateEscapeKeyDown?: boolean
  space?: StackSpace
  value: null | V
}
export type RadioButtonsOption<V extends boolean | number | string = string> = {
  disabled?: boolean
  children?: ComponentChildren
  value: V
}

export function RadioButtons<
  N extends string,
  V extends boolean | number | string
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
}: Props<HTMLInputElement, RadioButtonsProps<N, V>>): JSX.Element {
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
    <Stack space={space}>
      {options.map(function (option, index) {
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
              {...{ [ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
            />
            <div class={styles.children}>{children}</div>
          </label>
        )
      })}
    </Stack>
  )
}
