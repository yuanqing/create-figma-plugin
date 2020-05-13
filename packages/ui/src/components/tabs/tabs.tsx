/** @jsx h */
import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  LEFT_KEY_CODE,
  RIGHT_KEY_CODE,
  UP_KEY_CODE
} from '../../utilities/key-codes'
import styles from './tabs.scss'

export interface TabsProps {
  focused?: boolean,
  name: string,
  onChange: (state) => void, // FIXME
  options: TabsOption[],
  propagateEscapeKeyDown?: boolean,
  value: string
}
interface TabsOption {
  disabled?: boolean,
  text?: React.ReactNode,
  value: string,
  view: React.ReactNode
}

export function Tabs ({
  focused: isFocused,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
} : TabsProps) {
  const handleChange = useCallback(
    function (event) {
      const index = parseInt(event.target.getAttribute('data-index'))
      onChange({ [name]: options[index].value })
    },
    [name, onChange, options]
  )

  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.target.blur()
        return
      }
      if (
        keyCode === DOWN_KEY_CODE ||
        keyCode === LEFT_KEY_CODE ||
        keyCode === RIGHT_KEY_CODE ||
        keyCode === UP_KEY_CODE
      ) {
        if (value === null) {
          onChange({ [name]: options[0].value })
          return
        }
        const currentIndex = options.findIndex(function (option) {
          return option.value === value
        })
        let nextIndex =
          currentIndex +
          (keyCode === LEFT_KEY_CODE || keyCode === UP_KEY_CODE ? -1 : 1)
        if (nextIndex === -1) {
          nextIndex = options.length - 1
        }
        if (nextIndex === options.length) {
          nextIndex = 0
        }
        onChange({ [name]: options[nextIndex].value })
      }
    },
    [name, onChange, options, propagateEscapeKeyDown, value]
  )

  const activeOption = options.find(function (option) {
    return option.value === value
  })

  return (
    <div>
      <div
        class={styles.tabs}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        data-initial-focus={isFocused === true}
      >
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
                onChange={handleChange}
                tabIndex={-1}
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
