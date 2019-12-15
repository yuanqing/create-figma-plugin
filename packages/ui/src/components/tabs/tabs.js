/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './tabs.scss'

export function Tabs ({ key, onChange, options, value, ...rest }) {
  function handleChange (event) {
    const index = parseInt(event.target.getAttribute('data-index'))
    onChange(options[index].value, key)
  }

  const activeOption = options.find(function (option) {
    return option.value === value
  })
  return (
    <div>
      <div class={styles.tabs}>
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
                onChange={handleChange}
                data-index={index}
              />
              <div class={styles.text} data-text={text}>
                {text}
              </div>
            </label>
          )
        })}
      </div>
      {typeof activeOption === 'undefined' ? null : activeOption.view}
    </div>
  )
}
