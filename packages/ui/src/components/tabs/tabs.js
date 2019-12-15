/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './tabs.scss'

export function Tabs ({ name, onChange, options, value, ...rest }) {
  function handleChange (event) {
    const index = parseInt(event.target.getAttribute('data-index'))
    onChange(options[index].value, name)
  }
  const activeOption = options.find(function (option) {
    return option.value === value
  })

  return (
    <div>
      <div class={styles.tabs}>
        {options.map(function (option, index) {
          const text =
            typeof option.text !== 'undefined' ? option.text : option.value
          const id = `${name}-${index}`
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
      {typeof activeOption === 'undefined' ? null : (
        <div class={styles.activeView}>{activeOption.view}</div>
      )}
    </div>
  )
}
