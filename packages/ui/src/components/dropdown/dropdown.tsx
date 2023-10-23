import { ComponentChildren, h, RefObject } from 'preact'
import { createPortal } from 'preact/compat'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import menuStyles from '../../css/menu.module.css'
import { useMouseDownOutside } from '../../hooks/use-mouse-down-outside.js'
import { useScrollableMenu } from '../../hooks/use-scrollable-menu.js'
import { IconControlChevronDown8 } from '../../icons/icon-8/icon-control-chevron-down-8.js'
import { IconMenuCheckmarkChecked16 } from '../../icons/icon-16/icon-menu-checkmark-checked-16.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref.js'
import { noop } from '../../utilities/no-op.js'
import {
  INVALID_ID,
  ITEM_ID_DATA_ATTRIBUTE_NAME
} from '../../utilities/private/constants.js'
import dropdownStyles from './dropdown.module.css'
import { Id } from './private/types.js'
import { updateMenuElementLayout } from './private/update-menu-element-layout.js'

export interface DropdownProps {
  disabled?: boolean
  icon?: ComponentChildren
  onChange?: EventHandler.onChange<HTMLInputElement>
  onKeyDown?: EventHandler.onKeyDown<HTMLDivElement>
  onMouseDown?: EventHandler.onMouseDown<HTMLDivElement>
  onValueChange?: EventHandler.onValueChange<string>
  options: Array<DropdownOption>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  value: null | string
  variant?: DropdownVariant
}
export type DropdownOption =
  | DropdownOptionHeader
  | DropdownOptionSeparator
  | DropdownOptionValue
export type DropdownOptionHeader = {
  header: string
}
export type DropdownOptionSeparator = '-'
export type DropdownOptionValue = {
  disabled?: boolean
  text?: string
  value: string
}
export type DropdownVariant = 'border' | 'underline'

export const Dropdown = createComponent<HTMLDivElement, DropdownProps>(
  function (
    {
      disabled = false,
      icon,
      onChange = noop,
      onKeyDown = noop,
      onMouseDown = noop,
      onValueChange = noop,
      options,
      placeholder,
      propagateEscapeKeyDown = true,
      value,
      variant,
      ...rest
    },
    ref
  ) {
    if (typeof icon === 'string' && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: "${icon}"`)
    }

    const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
    const menuElementRef: RefObject<HTMLDivElement> = useRef(null)

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const index = findOptionIndexByValue(options, value)
    if (value !== null && index === -1) {
      throw new Error(`Invalid \`value\`: ${value}`)
    }
    const [selectedId, setSelectedId] = useState<Id>(
      index === -1 ? INVALID_ID : `${index}`
    )
    const children =
      typeof options[index] === 'undefined'
        ? ''
        : getDropdownOptionValue(options[index])

    // Uncomment to debug
    // console.table([{ isMenuVisible, selectedId }])

    const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } =
      useScrollableMenu({
        itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
        menuElementRef,
        selectedId,
        setSelectedId
      })

    const triggerRootBlur = useCallback(function () {
      getCurrentFromRef(rootElementRef).blur()
    }, [])

    const triggerRootFocus = useCallback(function () {
      getCurrentFromRef(rootElementRef).focus()
    }, [])

    const triggerMenuUpdateLayout = useCallback(function (selectedId: Id) {
      const rootElement = getCurrentFromRef(rootElementRef)
      const menuElement = getCurrentFromRef(menuElementRef)
      updateMenuElementLayout(rootElement, menuElement, selectedId)
    }, [])

    const triggerMenuHide = useCallback(function () {
      setIsMenuVisible(false)
      setSelectedId(INVALID_ID)
    }, [])

    const triggerMenuShow = useCallback(
      function () {
        if (isMenuVisible === true) {
          return
        }
        // Show the menu and update the `selectedId` on focus
        setIsMenuVisible(true)
        if (value === null) {
          triggerMenuUpdateLayout(selectedId)
          return
        }
        const index = findOptionIndexByValue(options, value)
        if (index === -1) {
          throw new Error(`Invalid \`value\`: ${value}`)
        }
        const newSelectedId = `${index}`
        setSelectedId(newSelectedId)
        triggerMenuUpdateLayout(newSelectedId)
      },
      [isMenuVisible, options, selectedId, triggerMenuUpdateLayout, value]
    )

    const handleRootKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLDivElement>) {
        onKeyDown(event)
        const key = event.key
        if (key === 'ArrowUp' || key === 'ArrowDown') {
          event.preventDefault()
          if (isMenuVisible === false) {
            triggerMenuShow()
            return
          }
          handleScrollableMenuKeyDown(event)
          return
        }
        if (key === 'Escape') {
          event.preventDefault()
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          if (isMenuVisible === true) {
            triggerMenuHide()
            return
          }
          triggerRootBlur()
          return
        }
        if (key === 'Enter') {
          event.preventDefault()
          if (isMenuVisible === false) {
            triggerMenuShow()
            return
          }
          if (selectedId !== INVALID_ID) {
            const selectedElement = getCurrentFromRef(
              menuElementRef
            ).querySelector<HTMLInputElement>(
              `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
            )
            if (selectedElement === null) {
              throw new Error('`selectedElement` is `null`')
            }
            selectedElement.checked = true
            const changeEvent = new window.Event('change', {
              bubbles: true,
              cancelable: true
            })
            selectedElement.dispatchEvent(changeEvent)
          }
          triggerMenuHide()
          return
        }
        if (key === 'Tab') {
          triggerMenuHide()
          return
        }
      },
      [
        handleScrollableMenuKeyDown,
        isMenuVisible,
        onKeyDown,
        propagateEscapeKeyDown,
        selectedId,
        triggerMenuHide,
        triggerMenuShow,
        triggerRootBlur
      ]
    )

    const handleRootMouseDown = useCallback(
      function (event: Event.onMouseDown<HTMLDivElement>) {
        // `mousedown` events from `menuElement` are stopped from propagating to `rootElement` by `handleMenuMouseDown`
        onMouseDown(event)
        if (isMenuVisible === false) {
          triggerMenuShow()
        }
      },
      [isMenuVisible, onMouseDown, triggerMenuShow]
    )

    const handleMenuMouseDown = useCallback(function (
      event: Event.onMouseDown<HTMLDivElement>
    ) {
      // Stop the `mousedown` event from propagating to the `rootElement`
      event.stopPropagation()
    },
    [])

    const handleOptionChange = useCallback(
      function (event: Event.onChange<HTMLInputElement>) {
        onChange(event)
        const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME)
        if (id === null) {
          throw new Error('`id` is `null`')
        }
        const optionValue = options[parseInt(id, 10)] as DropdownOptionValue
        const newValue = optionValue.value
        onValueChange(newValue)
        // Select `root`, then hide the menu
        triggerRootFocus()
        triggerMenuHide()
      },
      [onChange, onValueChange, options, triggerMenuHide, triggerRootFocus]
    )

    const handleSelectedOptionClick = useCallback(
      function () {
        triggerRootFocus()
        triggerMenuHide()
      },
      [triggerMenuHide, triggerRootFocus]
    )

    const handleMouseDownOutside = useCallback(
      function () {
        if (isMenuVisible === false) {
          return
        }
        triggerMenuHide()
        triggerRootBlur()
      },
      [isMenuVisible, triggerRootBlur, triggerMenuHide]
    )
    useMouseDownOutside({
      onMouseDownOutside: handleMouseDownOutside,
      ref: rootElementRef
    })

    useEffect(
      function () {
        function handleWindowScroll() {
          if (isMenuVisible === false) {
            return
          }
          triggerRootFocus()
          triggerMenuHide()
        }
        window.addEventListener('scroll', handleWindowScroll)
        return function () {
          window.removeEventListener('scroll', handleWindowScroll)
        }
      },
      [isMenuVisible, triggerMenuHide, triggerRootFocus]
    )

    const refCallback = useCallback(
      function (rootElement: null | HTMLDivElement) {
        rootElementRef.current = rootElement
        if (ref === null) {
          return
        }
        if (typeof ref === 'function') {
          ref(rootElement)
          return
        }
        ref.current = rootElement
      },
      [ref, rootElementRef]
    )

    return (
      <div
        {...rest}
        ref={refCallback}
        class={createClassName([
          dropdownStyles.dropdown,
          variant === 'border' ? dropdownStyles.hasBorder : null,
          typeof icon !== 'undefined' ? dropdownStyles.hasIcon : null,
          disabled === true ? dropdownStyles.disabled : null
        ])}
        onKeyDown={disabled === true ? undefined : handleRootKeyDown}
        onMouseDown={handleRootMouseDown}
        tabIndex={0}
      >
        {typeof icon === 'undefined' ? null : (
          <div class={dropdownStyles.icon}>{icon}</div>
        )}
        {value === null ? (
          typeof placeholder === 'undefined' ? (
            <div class={dropdownStyles.empty} />
          ) : (
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
          <div class={dropdownStyles.value}>{children}</div>
        )}
        <div class={dropdownStyles.chevronIcon}>
          <IconControlChevronDown8 />
        </div>
        {variant === 'underline' ? (
          <div class={dropdownStyles.underline} />
        ) : null}
        <div class={dropdownStyles.border} />
        {createPortal(
          <div
            ref={menuElementRef}
            class={createClassName([
              menuStyles.menu,
              dropdownStyles.menu,
              disabled === true || isMenuVisible === false
                ? menuStyles.hidden
                : null
            ])}
            onMouseDown={handleMenuMouseDown}
          >
            {options.map(function (option: DropdownOption, index: number) {
              if (typeof option === 'string') {
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
                    option.disabled === true
                      ? menuStyles.optionValueDisabled
                      : null,
                    option.disabled !== true && `${index}` === selectedId
                      ? menuStyles.optionValueSelected
                      : null
                  ])}
                >
                  <input
                    checked={value === option.value}
                    class={menuStyles.input}
                    disabled={option.disabled === true}
                    // If clicked on an unselected element, set the value
                    onChange={
                      value === option.value ? undefined : handleOptionChange
                    }
                    // Else hide the menu if clicked on an already-selected element
                    onClick={
                      value === option.value
                        ? handleSelectedOptionClick
                        : undefined
                    }
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
                  {typeof option.text === 'undefined'
                    ? option.value
                    : option.text}
                </label>
              )
            })}
          </div>,
          document.body
        )}
      </div>
    )
  }
)

function getDropdownOptionValue(option: DropdownOption): ComponentChildren {
  if (typeof option !== 'string') {
    if ('text' in option) {
      return option.text
    }
    if ('value' in option) {
      return option.value
    }
  }
  throw new Error('Invariant violation')
}

// Returns the index of the option in `options` with the given `value`, else `-1`
function findOptionIndexByValue(
  options: Array<DropdownOption>,
  value: null | string
): number {
  if (value === null) {
    return -1
  }
  let index = 0
  for (const option of options) {
    if (
      typeof option !== 'string' &&
      'value' in option &&
      option.value === value
    ) {
      return index
    }
    index += 1
  }
  return -1
}
