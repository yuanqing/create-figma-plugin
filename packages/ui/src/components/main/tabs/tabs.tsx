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
import styles from './tabs.css'

export interface TabsOption {
  disabled?: boolean
  children: ComponentChildren
  value: string
}
export interface TabsProps {
  name?: string
  onChange: OnChange<string>
  options: Array<TabsOption>
  propagateEscapeKeyDown?: boolean
  value: null | string
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-tabs-item-id'

export function Tabs({
  name,
  onChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TabsProps>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const index = (event.target as HTMLElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      )
      if (index === null) {
        return
      }
      const newValue = options[parseInt(index, 10)].value
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
        let nextIndex =
          currentIndex +
          (keyCode === LEFT_KEY_CODE || keyCode === UP_KEY_CODE ? -1 : 1)
        if (nextIndex === -1) {
          nextIndex = options.length - 1
        }
        if (nextIndex === options.length) {
          nextIndex = 0
        }
        const newValue = options[nextIndex].value
        onChange(newValue, name, event)
      }
    },
    [name, onChange, options, propagateEscapeKeyDown, value]
  )

  const activeOption = options.find(function (option) {
    return option.value === value
  })

  return (
    <div>
      <div class={styles.tabs} onKeyDown={handleKeyDown} tabIndex={0}>
        {options.map(function (option, index) {
          return (
            <label key={index} class={styles.label}>
              <input
                {...rest}
                checked={value === option.value}
                class={styles.input}
                name={name}
                onChange={handleChange}
                tabIndex={-1}
                type="radio"
                {...{ [ITEM_ID_DATA_ATTRIBUTE]: `${index}` }}
              />
              <div class={styles.text}>{option.value}</div>
            </label>
          )
        })}
      </div>
      {typeof activeOption === 'undefined' ? null : activeOption.children}
    </div>
  )
}
