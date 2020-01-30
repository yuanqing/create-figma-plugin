/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { Stack } from '../stack/stack'
import '../../scss/base.scss'
import styles from './radio-buttons.scss'

export function RadioButtons ({
  disabled: isDisabled,
  focused: isFocused,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  space = 'small',
  value,
  ...rest
}) {
  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.target.blur()
      }
    },
    [propagateEscapeKeyDown]
  )

  const handleChange = useCallback(
    function (event) {
      const index = parseInt(event.target.getAttribute('data-index'))
      onChange({ [name]: options[index].value })
    },
    [name, onChange, options]
  )

  return (
    <Stack space={space} onKeyDown={handleKeyDown}>
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
        const isOptionDisabled = isDisabled === true || option.disabled === true
        return (
          <label
            class={classnames(
              styles.label,
              isOptionDisabled === true ? styles.disabled : null
            )}
            key={index}
          >
            <input
              {...rest}
              class={styles.input}
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={isOptionDisabled === true}
              onChange={handleChange}
              tabIndex={isOptionDisabled === true ? null : '0'}
              data-index={index}
              data-initial-focus={isFocused === true}
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </Stack>
  )
}
