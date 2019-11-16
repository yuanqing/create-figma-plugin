/** @jsx h */
import { h } from 'preact'
import styles from './segmented-control.scss'

export function SegmentedControl ({ options, name, value, ...rest }) {
  return (
    <div class={styles.segmentedControl}>
      {options.map(function (option, index) {
        let text = option
        let disabled = false
        if (typeof option !== 'string') {
          text = option.value
          disabled = option.disabled
        }
        const id = `${name}${text}`
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
          </label>
        )
      })}
    </div>
  )
}
