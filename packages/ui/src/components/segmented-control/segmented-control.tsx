/** @jsx h */
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnChange, Props } from '../../types'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  LEFT_KEY_CODE,
  RIGHT_KEY_CODE,
  UP_KEY_CODE
} from '../../utilities/key-codes'
import styles from './segmented-control.css'

export interface SegmentedControlProps<Value, Key extends string> {
  disabled?: boolean
  focused?: boolean
  name: Key
  onChange: OnChange<Value, Key>
  options: Array<SegmentedControlOption<Value>>
  propagateEscapeKeyDown?: boolean
  value: Value
}
export interface SegmentedControlOption<Value> {
  disabled?: boolean
  text?: ComponentChildren
  value: Value
}

export function SegmentedControl<
  Value extends boolean | null | number | string,
  Key extends string
>({
  disabled: disabled,
  focused: isFocused,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SegmentedControlProps<Value, Key>>): JSX.Element {
  const handleChange = useCallback(
    function (event: Event) {
      const index = (event.target as HTMLElement).getAttribute('data-index')
      if (index === null) {
        return
      }
      const newValue = options[parseInt(index)].value
      onChange(
        { [name]: newValue } as { [k in Key]: Value },
        newValue,
        name,
        event
      )
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
          onChange(
            { [name]: newValue } as { [k in Key]: Value },
            newValue,
            name,
            event
          )
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
          onChange(
            { [name]: newValue } as { [k in Key]: Value },
            newValue,
            name,
            event
          )
        }
      }
    },
    [name, onChange, options, propagateEscapeKeyDown, value]
  )

  return (
    <div
      class={styles.segmentedControl}
      data-initial-focus={isFocused === true}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? undefined : 0}
    >
      {options.map(function (option, index) {
        const text =
          typeof option.text === 'undefined' ? option.value : option.text
        return (
          <label key={index} class={styles.label}>
            <input
              {...rest}
              checked={value === option.value}
              class={styles.input}
              data-index={index}
              disabled={disabled === true || option.disabled === true}
              name={name}
              onChange={handleChange}
              tabIndex={-1}
              type="radio"
              value={option.value === null ? undefined : `${option.value}`}
            />
            <div class={styles.text}>{text}</div>
          </label>
        )
      })}
    </div>
  )
}

function resolveNextIndex<Value>(
  options: Array<SegmentedControlOption<Value>>,
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
