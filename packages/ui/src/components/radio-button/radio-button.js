/** @jsx h */
import { h } from 'preact'
import styles from './radio-button.scss'

export function RadioButton ({ options, name, style, value, ...rest }) {
  return (
    <div class={styles.radioButton} style={style}>
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
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </div>
  )
}
