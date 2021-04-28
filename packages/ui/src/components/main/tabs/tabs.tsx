/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnChange, OnValueChange, Props } from '../../../types'
import styles from './tabs.css'

export interface TabsOption {
  disabled?: boolean
  children: ComponentChildren
  value: string
}
export interface TabsProps<T extends string> {
  name?: T
  onChange?: OnChange<HTMLDivElement | HTMLInputElement>
  onValueChange?: OnValueChange<string, T, null | string>
  options: Array<TabsOption>
  propagateEscapeKeyDown?: boolean
  value: null | string
}

const ITEM_ID_DATA_ATTRIBUTE = 'data-tabs-item-id'

export function Tabs<T extends string>({
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TabsProps<T>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name, value)
      onChange(event)
    },
    [name, onChange, onValueChange, options, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLDivElement>) {
      const key = event.key
      if (key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
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
          onValueChange(newValue, name, value)
          onChange(event)
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
        onValueChange(newValue, name, value)
        onChange(event)
      }
    },
    [name, onChange, onValueChange, options, propagateEscapeKeyDown, value]
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
