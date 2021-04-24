/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnValueChange, Props } from '../../../types'
import type { StackSpace } from '../../layout/stack/stack'
import { Stack } from '../../layout/stack/stack'
import styles from './radio-buttons.css'

export interface RadioButtonsOption<S extends boolean | number | string> {
  disabled?: boolean
  children?: ComponentChildren
  value: S
}
export interface RadioButtonsProps<
  T extends string,
  S extends boolean | number | string
> {
  disabled?: boolean
  name?: T
  onValueChange: OnValueChange<S, T>
  options: Array<RadioButtonsOption<S>>
  propagateEscapeKeyDown?: boolean
  space?: StackSpace
  value: null | S
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-radio-buttons-item-id'

export function RadioButtons<
  T extends string,
  S extends boolean | number | string
>({
  disabled = false,
  name,
  onValueChange,
  options,
  propagateEscapeKeyDown = true,
  space = 'small',
  value,
  ...rest
}: Props<HTMLInputElement, RadioButtonsProps<T, S>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const id = (event.target as HTMLInputElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
    },
    [name, onValueChange, options]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLInputElement).blur()
      }
      if (event.key === 'Enter') {
        const id = (event.target as HTMLInputElement).getAttribute(
          ITEM_ID_DATA_ATTRIBUTE
        ) as string
        const newValue = options[parseInt(id, 10)].value
        onValueChange(newValue, name)
      }
    },
    [name, onValueChange, options, propagateEscapeKeyDown]
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
            class={classnames(
              styles.label,
              isOptionDisabled === true ? styles.disabled : null
            )}
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
              {...{ [ITEM_ID_DATA_ATTRIBUTE]: `${index}` }}
            />
            <div class={styles.children}>{children}</div>
          </label>
        )
      })}
    </Stack>
  )
}
