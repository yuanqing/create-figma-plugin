/** @jsx h */
import { h } from 'preact'
import styles from './radio-button.scss'

export function RadioButton ({ options, name, value, ...rest }) {
  return (
    <div class={styles.radioButton}>
      {options.map(function (option, index) {
        let text = option
        let disabled = false
        let children = null
        if (typeof option !== 'string') {
          text = typeof option.value !== 'undefined' ? option.value : null
          disabled =
            typeof option.disabled !== 'undefined' ? option.disabled : false
          children =
            typeof option.children !== 'undefined' ? option.children : null
        }
        const id = `${name}${option}`
        return (
          <label class={styles.label} for={id} key={index}>
            <input
              {...rest}
              class={styles.input}
              disabled={disabled}
              type='radio'
              id={id}
              name={name}
              value={option}
              checked={value === option}
            />
            <div class={styles.text}>{text}</div>
            {children !== null ? (
              <div class={styles.children}>{children}</div>
            ) : null}
          </label>
        )
      })}
    </div>
  )
}
