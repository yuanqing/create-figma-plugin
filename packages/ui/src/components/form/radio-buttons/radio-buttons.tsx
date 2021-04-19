/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import { ESCAPE_KEY_CODE } from '../../../utilities/key-codes'
import type { StackSpace } from '../../layout/stack/stack'
import { Stack } from '../../layout/stack/stack'
import styles from './radio-buttons.css'

export interface RadioButtonsOption<T extends boolean | number | string> {
  disabled?: boolean
  children?: ComponentChildren
  value: T
}
export interface RadioButtonsProps<T extends boolean | number | string> {
  disabled?: boolean
  name?: string
  onChange: OnChange<null | T>
  options: Array<RadioButtonsOption<T>>
  propagateEscapeKeyDown?: boolean
  space?: StackSpace
  value: null | T
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-radio-buttons-item-id'

export function RadioButtons<T extends boolean | number | string>({
  disabled = false,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  space = 'small',
  value,
  ...rest
}: Props<HTMLInputElement, RadioButtonsProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const index = (event.target as HTMLElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      )
      if (index === null) {
        return
      }
      const newValue = options[parseInt(index, 10)].value
      onChange(newValue, name, event)
    },
    [name, onChange, options]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLDivElement> = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLElement).blur()
      }
    },
    [propagateEscapeKeyDown]
  )

  return (
    <Stack onKeyDown={handleKeyDown} space={space}>
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
              tabIndex={isOptionDisabled === true ? -1 : undefined}
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
