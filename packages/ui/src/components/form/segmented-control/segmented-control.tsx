/** @jsx h */
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { OnChange, OnValueChange, Props } from '../../../types'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import styles from './segmented-control.css'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-segmented-control-item-id'

export type SegmentedControlOption<
  V extends boolean | number | string = string
> = {
  disabled?: boolean
  children?: ComponentChildren
  value: V
}
export type SegmentedControlProps<
  N extends string,
  V extends boolean | number | string
> = {
  disabled?: boolean
  name?: N
  onChange?: OnChange<HTMLInputElement>
  onValueChange?: OnValueChange<V, N>
  options: Array<SegmentedControlOption<V>>
  propagateEscapeKeyDown?: boolean
  value: V
}

export function SegmentedControl<
  N extends string,
  V extends boolean | number | string
>({
  disabled = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  options,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, SegmentedControlProps<N, V>>): JSX.Element {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)

  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name, value)
      onChange(event)
    },
    [name, onChange, onValueChange, options, value]
  )

  const handleFocus = useCallback(function () {
    // Redirect focus to the root element
    const rootElement = getCurrentFromRef(rootElementRef)
    rootElement.focus()
  }, [])

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
        const currentIndex = options.findIndex(function (option) {
          return option.value === value
        })
        const nextIndex = resolveNextIndex(
          options,
          currentIndex,
          key === 'ArrowLeft' || key === 'ArrowUp' ? -1 : 1
        )
        if (nextIndex === -1) {
          return
        }
        const newValue = options[nextIndex].value
        onValueChange(newValue, name, value)
        const currentTarget = getCurrentFromRef(
          rootElementRef
        ).querySelector<HTMLInputElement>(
          `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${nextIndex}']`
        )
        if (currentTarget === null) {
          throw new Error('`currentTarget` is `null`')
        }
        onChange({ ...event, currentTarget })
      }
    },
    [name, onChange, onValueChange, options, propagateEscapeKeyDown, value]
  )

  return (
    <div
      ref={rootElementRef}
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
              onFocus={handleFocus}
              type="radio"
              value={`${option.value}`}
              {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
            />
            <div class={styles.children}>{children}</div>
          </label>
        )
      })}
    </div>
  )
}

function resolveNextIndex<V extends boolean | number | string = string>(
  options: Array<SegmentedControlOption<V>>,
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
