/** @jsx h */
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnChange } from '../../types'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  LEFT_KEY_CODE,
  RIGHT_KEY_CODE,
  UP_KEY_CODE
} from '../../utilities/key-codes'
import styles from './segmented-control.scss'

export interface SegmentedControlProps<T> {
  disabled?: boolean
  focused?: boolean
  name: string
  onChange: OnChange
  options: Array<SegmentedControlOption<T>>
  propagateEscapeKeyDown?: boolean
  value: null | T
}

interface SegmentedControlOption<T> {
  disabled?: boolean
  text?: preact.ComponentChildren
  value: null | T
}

export function SegmentedControl<T extends string | number | boolean = string>({
  disabled: disabled,
  focused: isFocused,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: SegmentedControlProps<T>): h.JSX.Element {
  const handleChange = useCallback(
    function (event: Event) {
      const index = (event.target as HTMLElement).getAttribute('data-index')
      if (index === null) {
        return
      }
      const newValue = options[parseInt(index)].value
      onChange({ [name]: newValue }, newValue, name, event)
    },
    [name, onChange, options]
  )

  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === ESCAPE_KEY_CODE) {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLElement).blur()
        return
      }
      if (
        keyCode === DOWN_KEY_CODE ||
        keyCode === LEFT_KEY_CODE ||
        keyCode === RIGHT_KEY_CODE ||
        keyCode === UP_KEY_CODE
      ) {
        if (value === null) {
          const newValue = options[0].value
          onChange({ [name]: newValue }, newValue, name, event)
          return
        }
        const currentIndex = options.findIndex(function (option) {
          return option.value === value
        })
        const nextIndex = resolveNextIndex(
          options,
          currentIndex,
          keyCode === LEFT_KEY_CODE || keyCode === UP_KEY_CODE ? -1 : 1
        )
        if (nextIndex !== -1) {
          const newValue = options[nextIndex].value
          onChange({ [name]: newValue }, newValue, name, event)
        }
      }
    },
    [name, onChange, options, propagateEscapeKeyDown, value]
  )

  return (
    <div
      class={styles.segmentedControl}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? undefined : 0}
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
              type="radio"
              name={name}
              value={option.value === null ? undefined : `${option.value}`}
              checked={value === option.value}
              disabled={disabled === true || option.disabled === true}
              onChange={handleChange}
              tabIndex={-1}
              data-index={index}
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </div>
  )
}

function resolveNextIndex<T>(
  options: Array<SegmentedControlOption<T>>,
  currentIndex: number,
  delta: number
): number {
  let nextIndex = currentIndex
  do {
    nextIndex += delta
    if (nextIndex === -1) {
      nextIndex = options.length - 1
    }
    if (nextIndex === options.length) {
      nextIndex = 0
    }
    if (options[nextIndex].disabled !== true) {
      return nextIndex
    }
  } while (nextIndex !== currentIndex)
  return -1
}
