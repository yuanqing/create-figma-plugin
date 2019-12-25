/** @jsx h */
import { h } from 'preact'
import { Stack } from '../stack/stack'
import '../../scss/base.scss'
import styles from './radio-buttons.scss'

export function RadioButtons ({
  name,
  onChange,
  options,
  space = 'small',
  value,
  ...rest
}) {
  function handleChange (event) {
    const index = parseInt(event.target.getAttribute('data-index'))
    onChange(options[index].value, name)
  }

  return (
    <Stack space={space}>
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
        return (
          <label class={styles.label} key={index}>
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
