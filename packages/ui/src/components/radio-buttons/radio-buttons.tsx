/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { HTMLProps, OnChange, Space } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { Stack } from '../stack/stack'
import styles from './radio-buttons.css'

export interface RadioButtonsProps {
  disabled?: boolean
  focused?: boolean
  name: string
  onChange: OnChange
  options: RadioButtonsOption[]
  propagateEscapeKeyDown?: boolean
  space?: Space
  value: null | string
}
export interface RadioButtonsOption {
  disabled?: boolean
  text?: preact.ComponentChildren
  value: null | string
}

export function RadioButtons({
  disabled,
  focused,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  space = 'small',
  value,
  ...rest
}: HTMLProps<RadioButtonsProps, HTMLInputElement>): h.JSX.Element {
  const handleKeyDown = useCallback(
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

  const handleChange = useCallback(
    function (event: Event) {
      const index = (event.target as HTMLElement).getAttribute('data-index')
      if (index === null) {
        return
      }
      const newValue = options[parseInt(index)].value
      onChange({ [name]: newValue }, newValue, name, event)
    },
    [name, onChange, options]
  )

  return (
    <Stack space={space} {...{ onKeyDown: handleKeyDown }}>
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
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
              data-index={index}
              data-initial-focus={focused === true}
              disabled={isOptionDisabled === true}
              name={name}
              onChange={handleChange}
              tabIndex={isOptionDisabled === true ? undefined : 0}
              type="radio"
              value={option.value === null ? undefined : option.value}
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </Stack>
  )
}
