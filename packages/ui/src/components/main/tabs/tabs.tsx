/** @jsx h */
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import type { OnValueChange, Props } from '../../../types'
import styles from './tabs.css'

export interface TabsOption {
  disabled?: boolean
  children: ComponentChildren
  value: string
}
export interface TabsProps<T extends string> {
  name?: T
  onValueChange: OnValueChange<string, T>
  options: Array<TabsOption>
  propagateEscapeKeyDown?: boolean
  value: null | string
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-tabs-item-id'

export function Tabs<T extends string>({
  name,
  onValueChange,
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TabsProps<T>>): JSX.Element {
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    function (event: Event) {
      const id = (event.target as HTMLElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
    },
    [name, onValueChange, options]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLDivElement> = useCallback(
    function (event: KeyboardEvent) {
      const key = event.key
      if (key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        ;(event.target as HTMLElement).blur()
        return
      }
      if (
        key === 'ArrowUp' ||
        key === 'ArrowDown' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight'
      ) {
        if (value === null) {
          const newValue = options[0].value
          onValueChange(newValue, name)
          return
        }
        const currentIndex = options.findIndex(function (option) {
          return option.value === value
        })
        let nextIndex =
          currentIndex + (key === 'ArrowLeft' || key === 'ArrowUp' ? -1 : 1)
        if (nextIndex === -1) {
          nextIndex = options.length - 1
        }
        if (nextIndex === options.length) {
          nextIndex = 0
        }
        const newValue = options[nextIndex].value
        onValueChange(newValue, name)
      }
    },
    [name, onValueChange, options, propagateEscapeKeyDown, value]
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
