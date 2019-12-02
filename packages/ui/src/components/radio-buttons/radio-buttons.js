/** @jsx h */
import { h } from 'preact'
import { Stack } from '../stack/stack'
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
          typeof option.text !== 'undefined' ? option.text : option.value
        const id = `${name}${option.value}`
        return (
          <label class={styles.label} for={id} key={index}>
            <input
              {...rest}
              class={styles.input}
              type='radio'
              id={id}
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={option.disabled === true}
              onChange={handleChange}
              data-index={index}
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </Stack>
  )
}
