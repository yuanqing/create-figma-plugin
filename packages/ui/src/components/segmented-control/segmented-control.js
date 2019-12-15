/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './segmented-control.scss'

export function SegmentedControl ({ key, onChange, options, value, ...rest }) {
  function handleChange (event) {
    const index = parseInt(event.target.getAttribute('data-index'))
    onChange(options[index].value, key)
  }

  return (
    <div class={styles.segmentedControl}>
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
        return (
          <label class={styles.label} key={index}>
            <input
              {...rest}
              class={styles.input}
              type='radio'
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
    </div>
  )
}
