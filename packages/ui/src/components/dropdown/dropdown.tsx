/** @jsx h */
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import menuStyles from '../../css/menu.css'
import { useMouseDownOutside } from '../../hooks/use-mouse-down-outside'
import { useScrollableMenu } from '../../hooks/use-scrollable-menu'
import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref'
import { IconControlChevronDown8 } from '../icon/icon-8/icon-control-chevron-down-8'
import { IconMenuCheckmarkChecked16 } from '../icon/icon-16/icon-menu-checkmark-checked-16'
import dropdownStyles from './dropdown.css'

const INVALID_ID = null
const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-dropdown-item-id'
const MENU_VERTICAL_MARGIN = 16

type Id = typeof INVALID_ID | string

export type DropdownProps<
  Name extends string,
  Value extends boolean | number | string = string
> = {
  disabled?: boolean
  icon?: ComponentChildren
  name?: Name
  noBorder?: boolean
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<Value, Name>
  options: Array<DropdownOption<Value>>
  placeholder?: string
  value: null | Value
}
export type DropdownOption<Value extends boolean | number | string = string> =
  | DropdownOptionHeader
  | DropdownOptionValue<Value>
  | DropdownOptionSeparator
export type DropdownOptionHeader = {
  header: string
}
export type DropdownOptionValue<Value> = {
  value: Value
}
export type DropdownOptionSeparator = {
  separator: true
}

export function Dropdown<
  Name extends string,
  Value extends boolean | number | string = string
>({
  disabled = false,
  icon,
  name,
  noBorder,
  options,
  onChange = function () {},
  onValueChange = function () {},
  placeholder,
  value,
  ...rest
}: Props<HTMLDivElement, DropdownProps<Name, Value>>): JSX.Element {
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
  // console.table([{ isMenuVisible, selectedId }])

  const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } =
    useScrollableMenu({
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

  const handleRootFocus = useCallback(
    function (): void {
      // Show the menu and update the `selectedId` on focus
      setIsMenuVisible(true)
      const rootElement = getCurrentFromRef(rootElementRef)
      const menuElement = getCurrentFromRef(menuElementRef)
      if (value === null) {
        updateMenuElementLayout(rootElement, menuElement, INVALID_ID)
        return
      }
      const index = findOptionIndexByValue(options, value)
      if (index === -1) {
        throw new Error(`Invalid \`value\`: ${value}`)
      }
      const newSelectedId = `${index}`
      setSelectedId(newSelectedId)
      updateMenuElementLayout(rootElement, menuElement, newSelectedId)
    },
    [options, value]
  )

  const handleRootKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLDivElement>): void {
      if (event.key === 'Escape') {
        triggerBlur()
        return
      }
      if (event.key === 'Enter') {
        if (selectedId !== INVALID_ID) {
          const selectedElement = getCurrentFromRef(
            menuElementRef
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

  const handleRootMouseDown = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLDivElement>): void {
      // `mousedown` events from `menuElement` are stopped from propagating to `rootElement` by `handleMenuMouseDown`
      if (isMenuVisible === false) {
        return
      }
      event.preventDefault()
      triggerBlur()
    },
    [isMenuVisible, triggerBlur]
  )

  const handleMenuMouseDown = useCallback(function (
    event: JSX.TargetedMouseEvent<HTMLDivElement>
  ): void {
    // Stop the `mousedown` event from propagating to the `rootElement`
    event.stopPropagation()
  },
  [])

  const handleOptionChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const optionValue = options[
        parseInt(id, 10)
      ] as DropdownOptionValue<Value>
      const newValue = optionValue.value
      onValueChange(newValue, name)
      onChange(event)
      triggerBlur()
    },
    [name, onChange, onValueChange, options, triggerBlur]
  )

  const handleMouseDownOutside = useCallback(
    function (): void {
      if (isMenuVisible === false) {
        return
      }
      triggerBlur()
    },
    [isMenuVisible, triggerBlur]
  )
  useMouseDownOutside({
    onMouseDownOutside: handleMouseDownOutside,
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
      onFocus={handleRootFocus}
      onKeyDown={disabled === true ? undefined : handleRootKeyDown}
      onMouseDown={handleRootMouseDown}
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
        <IconControlChevronDown8 />
      </div>
      <div class={dropdownStyles.border} />
      <div
        ref={menuElementRef}
        class={createClassName([
          menuStyles.menu,
          disabled === true || isMenuVisible === false
            ? menuStyles.hidden
            : null
        ])}
        onMouseDown={handleMenuMouseDown}
      >
        {options.map(function (
          option: DropdownOption<Value>,
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
                // If clicked on an unselected element, set the value
                onChange={
                  value === option.value ? undefined : handleOptionChange
                }
                // Else blur if clicked on an already-selected element
                onClick={value === option.value ? triggerBlur : undefined}
                onMouseMove={handleScrollableMenuItemMouseMove}
                tabIndex={-1}
                type="radio"
                value={`${option.value}`}
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
              />
              {option.value === value ? (
                <div class={menuStyles.checkIcon}>
                  <IconMenuCheckmarkChecked16 />
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
function findOptionIndexByValue<
  Value extends boolean | number | string = string
>(options: Array<DropdownOption<Value>>, value: null | Value): number {
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

function updateMenuElementLayout(
  rootElement: HTMLDivElement,
  menuElement: HTMLDivElement,
  selectedId: Id
) {
  // Maximum height of `menuElement` is viewport height minus the top and bottom margin
  const maxHeight = window.innerHeight - 2 * MENU_VERTICAL_MARGIN
  menuElement.style.maxHeight = `${maxHeight}px`

  // Compute `topOffset` (relative to `rootElement`) such that `menuElement`
  // fits within viewport
  const topOffset = Math.min(
    0,
    window.innerHeight -
      MENU_VERTICAL_MARGIN -
      (rootElement.getBoundingClientRect().top + menuElement.offsetHeight)
  )
  if (selectedId === INVALID_ID || topOffset !== 0) {
    menuElement.style.top = `${topOffset}px`
    return
  }

  // `topOffset` is 0 (so `menuElement` comfortably fits within the
  // viewport) and `selectedId` is valid, so try to adjust the `top`
  // position of `menuElement` such that `selectedElement` is directly
  // above the `rootElement`
  const selectedElement = menuElement.querySelector<HTMLInputElement>(
    `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
  )
  if (selectedElement === null) {
    throw new Error('Invariant violation') // `index` is valid
  }
  const selectedElementTop =
    selectedElement.getBoundingClientRect().top -
    menuElement.getBoundingClientRect().top
  const maximumTopOffset = Math.max(
    0,
    rootElement.getBoundingClientRect().top - MENU_VERTICAL_MARGIN
  )
  menuElement.style.top = `${
    -1 * Math.min(selectedElementTop, maximumTopOffset)
  }px`
}
