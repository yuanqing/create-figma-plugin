/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { Stack } from '../stack/stack'
import '../../scss/base.scss'
import styles from './radio-buttons.scss'

export function RadioButtons ({
  name,
  onChange,
  options,
  propagateEscapeKeyDown = false,
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
      onChange(options[index].value, name)
    },
    [name, onChange, options]
  )

  return (
    <Stack space={space} onKeyDown={handleKeyDown}>
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
        return (
          <label
            class={classnames(
              styles.label,
              option.disabled === true ? styles.disabled : null
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
              disabled={option.disabled === true}
              onChange={handleChange}
              data-index={index}
              tabIndex='0'
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </Stack>
  )
}
