/** @jsx h */
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import menuStyles from '../../css/menu.css'
import { useClickOutside } from '../../hooks/use-click-outside'
import { useScrollableMenu } from '../../hooks/use-scrollable-menu'
import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref'
import { IconCheck } from '../icon/icon-check/icon-check'
import { IconChevron } from '../icon/icon-chevron/icon-chevron'
import dropdownStyles from './dropdown.css'

const INVALID_ID = null
const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-dropdown-item-id'

type Id = typeof INVALID_ID | string

export type DropdownProps<
  N extends string,
  V extends boolean | number | string = string
> = {
  disabled?: boolean
  icon?: ComponentChildren
  name?: N
  noBorder?: boolean
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<V, N>
  options: Array<DropdownOption<V>>
  placeholder?: string
  top?: boolean
  value: null | V
}
export type DropdownOption<V extends boolean | number | string = string> =
  | DropdownOptionHeader
  | DropdownOptionValue<V>
  | DropdownOptionSeparator
export type DropdownOptionHeader = {
  header: string
}
export type DropdownOptionValue<V> = {
  value: V
}
export type DropdownOptionSeparator = {
  separator: true
}

export function Dropdown<
  N extends string,
  V extends boolean | number | string = string
>({
  disabled = false,
  icon,
  name,
  noBorder,
  options,
  onChange = function () {},
  onValueChange = function () {},
  placeholder,
  top,
  value,
  ...rest
}: Props<HTMLDivElement, DropdownProps<N, V>>): JSX.Element {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const index = findOptionIndexByValue(options, value)
  if (value !== null && index === -1) {
    throw new Error(`Invalid \`value\`: ${value}`)
  }
  const [selectedId, setSelectedId] = useState<Id>(
    index === -1 ? null : `${index}`
  )

  // Uncomment to debug
  // console.table([{isMenuVisible, selectedId}])

  const {
    handleScrollableMenuKeyDown,
    handleScrollableMenuItemMouseMove
  } = useScrollableMenu({
    itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
    menuElementRef,
    selectedId: selectedId,
    setSelectedId: setSelectedId
  })

  const triggerBlur = useCallback(function (): void {
    setIsMenuVisible(false)
    setSelectedId(INVALID_ID)
    getCurrentFromRef(rootElementRef).blur()
  }, [])

  const handleFocus = useCallback(
    function (): void {
      setIsMenuVisible(true)
      if (value === null) {
        return
      }
      const index = findOptionIndexByValue(options, value)
      if (index === -1) {
        throw new Error(`Invalid \`value\`: ${value}`)
      }
      setSelectedId(`${index}`)
    },
    [options, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLDivElement>): void {
      if (event.key === 'Escape') {
        triggerBlur()
        return
      }
      if (event.key === 'Enter') {
        if (selectedId !== INVALID_ID) {
          const selectedElement = getCurrentFromRef(
            rootElementRef
          ).querySelector<HTMLInputElement>(
            `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
          )
          if (selectedElement === null) {
            throw new Error('Invariant violation') // `selectedId` is valid
          }
          selectedElement.checked = true
          const changeEvent = document.createEvent('Event')
          changeEvent.initEvent('change', true, true)
          selectedElement.dispatchEvent(changeEvent)
        }
        triggerBlur()
        return
      }
      handleScrollableMenuKeyDown(event)
    },
    [handleScrollableMenuKeyDown, selectedId, triggerBlur]
  )

  const handleMenuClick = useCallback(function (
    event: JSX.TargetedMouseEvent<HTMLDivElement>
  ): void {
    // Stop the click from propagating to the `rootElement`
    event.stopPropagation()
  },
  [])

  const handleOptionChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const optionValue = options[parseInt(id, 10)] as DropdownOptionValue<V>
      const newValue = optionValue.value
      onValueChange(newValue, name)
      onChange(event)
      triggerBlur()
    },
    [name, onChange, onValueChange, options, triggerBlur]
  )

  const handleClickOutside = useCallback(
    function (): void {
      if (isMenuVisible === false) {
        return
      }
      triggerBlur()
    },
    [isMenuVisible, triggerBlur]
  )
  useClickOutside({
    onClickOutside: handleClickOutside,
    ref: rootElementRef
  })

  return (
    <div
      {...rest}
      ref={rootElementRef}
      class={createClassName([
        dropdownStyles.dropdown,
        disabled === true ? dropdownStyles.disabled : null,
        noBorder === true ? dropdownStyles.noBorder : null
      ])}
      onFocus={handleFocus}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? -1 : 0}
    >
      {typeof icon === 'undefined' ? null : (
        <div class={dropdownStyles.icon}>{icon}</div>
      )}
      {value === null ? (
        typeof placeholder === 'undefined' ? null : (
          <div
            class={createClassName([
              dropdownStyles.value,
              dropdownStyles.placeholder
            ])}
          >
            {placeholder}
          </div>
        )
      ) : (
        <div class={dropdownStyles.value}>{value}</div>
      )}
      <div class={dropdownStyles.chevronIcon}>
        <IconChevron />
      </div>
      <div class={dropdownStyles.border}></div>
      <div
        ref={menuElementRef}
        class={createClassName([
          menuStyles.menu,
          disabled === true || isMenuVisible === false
            ? menuStyles.hidden
            : null,
          top === true ? menuStyles.top : null
        ])}
        onClick={handleMenuClick}
      >
        {options.map(function (
          option: DropdownOption<V>,
          index: number
        ): JSX.Element {
          if ('separator' in option) {
            return <hr key={index} class={menuStyles.optionSeparator} />
          }
          if ('header' in option) {
            return (
              <h1 key={index} class={menuStyles.optionHeader}>
                {option.header}
              </h1>
            )
          }
          return (
            <label
              key={index}
              class={createClassName([
                menuStyles.optionValue,
                `${index}` === selectedId
                  ? menuStyles.optionValueSelected
                  : null
              ])}
            >
              <input
                checked={value === option.value}
                class={menuStyles.input}
                name={name}
                onChange={
                  value === option.value ? undefined : handleOptionChange
                }
                onClick={value === option.value ? triggerBlur : undefined}
                onMouseMove={handleScrollableMenuItemMouseMove}
                tabIndex={-1}
                type="radio"
                value={`${option.value}`}
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
              />
              {option.value === value ? (
                <div class={menuStyles.checkIcon}>
                  <IconCheck />
                </div>
              ) : null}
              {option.value}
            </label>
          )
        })}
      </div>
    </div>
  )
}

// Returns the index of the option in `options` with the given `value`, else `-1`
function findOptionIndexByValue<V extends boolean | number | string = string>(
  options: Array<DropdownOption<V>>,
  value: null | V
): number {
  if (value === null) {
    return -1
  }
  let index = 0
  for (const option of options) {
    if ('value' in option && option.value === value) {
      return index
    }
    index += 1
  }
  return -1
}
