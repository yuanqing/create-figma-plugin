/** @jsx h */
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import styles from './tabs.css'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-tabs-item-id'

export type TabsProps<N extends string> = {
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<string, N>
  options: Array<TabsOption>
  propagateEscapeKeyDown?: boolean
  value: null | string
}
export type TabsOption = {
  disabled?: boolean
  children: ComponentChildren
  value: string
}

export function Tabs<N extends string>({
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, TabsProps<N>>): JSX.Element {
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
      onChange({ ...event, currentTarget: getCurrentFromRef(inputElementRef) })
    },
    [name, onChange, onValueChange, options]
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
          onValueChange(newValue, name)
          onChange({
            ...event,
            currentTarget: getCurrentFromRef(inputElementRef)
          })
          return
        }
        const currentIndex = options.findIndex(function (option: TabsOption) {
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
        onChange({
          ...event,
          currentTarget: getCurrentFromRef(inputElementRef)
        })
      }
    },
    [name, onChange, onValueChange, options, propagateEscapeKeyDown, value]
  )

  const activeOption = options.find(function (option: TabsOption) {
    return option.value === value
  })

  return (
    <div>
      <div class={styles.tabs} onKeyDown={handleKeyDown} tabIndex={0}>
        {options.map(function (option: TabsOption, index: number) {
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
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
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
