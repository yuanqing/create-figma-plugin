/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnChange, Space } from '../../types'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { Stack } from '../stack/stack'
import styles from './radio-buttons.scss'

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
interface RadioButtonsOption {
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
}: RadioButtonsProps): h.JSX.Element {
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
            className={classnames(
              styles.label,
              isOptionDisabled === true ? styles.disabled : null
            )}
            key={index}
          >
            <input
              {...rest}
              className={styles.input}
              type="radio"
              name={name}
              value={option.value === null ? undefined : option.value}
              checked={value === option.value}
              disabled={isOptionDisabled === true}
              onChange={handleChange}
              tabIndex={isOptionDisabled === true ? undefined : 0}
              data-index={index}
              data-initial-focus={focused === true}
            />
            <div className={styles.text}>{text}</div>
          </label>
        )
      })}
    </Stack>
  )
}
