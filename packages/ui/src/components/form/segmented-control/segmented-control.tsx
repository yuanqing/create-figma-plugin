/** @jsx h */
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnChange, Props } from '../../../types'
import {
  DOWN_KEY_CODE,
  ESCAPE_KEY_CODE,
  LEFT_KEY_CODE,
  RIGHT_KEY_CODE,
  UP_KEY_CODE
} from '../../../utilities/key-codes'
import styles from './segmented-control.css'

export interface SegmentedControlOption<T> {
  disabled?: boolean
  children?: ComponentChildren
  value: T
}
export interface SegmentedControlProps<T extends boolean | number | string> {
  disabled?: boolean
  name?: string
  onChange: OnChange<null | T>
  options: Array<SegmentedControlOption<T>>
  propagateEscapeKeyDown?: boolean
  value: null | T
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-segmented-control-item-id'

export function SegmentedControl<T extends boolean | number | string>({
  disabled = false,
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SegmentedControlProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const id = (event.target as HTMLElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onChange(newValue, name, event)
    },
    [name, onChange, options]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLDivElement> = useCallback(
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
          onChange(newValue, name, event)
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
          onChange(newValue, name, event)
        }
      }
    },
    [name, onChange, options, propagateEscapeKeyDown, value]
  )

  return (
    <div
      class={styles.segmentedControl}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? -1 : 0}
    >
      {options.map(function (option, index) {
        const children =
          typeof option.children === 'undefined'
            ? `${option.value}`
            : option.children
        const isOptionDisabled = disabled === true || option.disabled === true
        return (
          <label key={index} class={styles.label}>
            <input
              {...rest}
              checked={value === option.value}
              class={styles.input}
              disabled={isOptionDisabled === true}
              name={name}
              onChange={handleChange}
              tabIndex={-1}
              type="radio"
              {...{ [ITEM_ID_DATA_ATTRIBUTE]: `${index}` }}
            />
            <div class={styles.children}>{children}</div>
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
