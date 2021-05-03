/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
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
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange, options]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
  )

  const activeOption = options.find(function (option: TabsOption) {
    return option.value === value
  })

  return (
    <div>
      <div class={styles.tabs}>
        {options.map(function (option: TabsOption, index: number) {
          return (
            <label key={index} class={styles.label}>
              <input
                {...rest}
                checked={value === option.value}
                class={styles.input}
                name={name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                type="radio"
                value={option.value}
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
              />
              <div class={styles.value}>{option.value}</div>
            </label>
          )
        })}
      </div>
      {typeof activeOption === 'undefined' ? null : activeOption.children}
    </div>
  )
}
