/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX, RefObject } from 'preact'
import { h } from 'preact'
import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'

import type { OnChange, Props } from '../../../../types'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref'
import {
  BACKSPACE_KEY_CODE,
  DELETE_KEY_CODE,
  DOWN_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE,
  UP_KEY_CODE
} from '../../../../utilities/key-codes'
import styles from '../textbox.css'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import { TEXTBOX_MIXED_VALUE } from '../utilities/textbox-mixed-value'
import textboxAutocompleteStyles from './textbox-autocomplete.css'

export type TextboxAutocompleteOption =
  | TextboxAutocompleteOptionHeader
  | TextboxAutocompleteOptionValue
  | TextboxAutocompleteOptionSeparator
export interface TextboxAutocompleteOptionHeader {
  id?: null | string
  header: string
}
export interface TextboxAutocompleteOptionValue {
  id?: null | string
  value: string
}
export interface TextboxAutocompleteOptionSeparator {
  id?: null | string
  separator: true
}
export interface TextboxAutocompleteProps {
  disabled?: boolean
  filter?: boolean
  icon?: ComponentChildren
  name?: string
  noBorder?: boolean
  onChange: OnChange<typeof TEXTBOX_MIXED_VALUE | string>
  options: Array<TextboxAutocompleteOption>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  strict?: boolean
  top?: boolean
  value: typeof TEXTBOX_MIXED_VALUE | string
}

type ItemId = typeof INVALID_ITEM_ID | string

const EMPTY_STRING = ''
const INVALID_ITEM_ID = null
const ITEM_ID_DATA_ATTRIBUTE = 'data-textbox-autocomplete-item-id'

export function TextboxAutocomplete({
  disabled = false,
  filter = false,
  icon,
  name,
  noBorder = false,
  onChange,
  options,
  placeholder,
  propagateEscapeKeyDown = true,
  strict = false,
  top = false,
  value: committedValue,
  ...rest
}: Props<HTMLInputElement, TextboxAutocompleteProps>): JSX.Element {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)
  const scrollTopRef = useRef(0)
  const shouldSelectAllRef = useRef(false) // Whether to select the contents of the textbox

  const [currentValue, setCurrentValue] = useState<
    typeof TEXTBOX_MIXED_VALUE | string
  >(EMPTY_STRING)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [selectedId, setSelectedId] = useState<ItemId>(INVALID_ITEM_ID)

  let menuItems: Array<TextboxAutocompleteOption> = options.map(function (
    option,
    index
  ) {
    return {
      id: `${index}`,
      ...option
    }
  })

  const isValidValue = useCallback(
    function (value: typeof TEXTBOX_MIXED_VALUE | string): boolean {
      if (value === TEXTBOX_MIXED_VALUE || value === EMPTY_STRING) {
        return true
      }
      for (const menuItem of menuItems) {
        if ('value' in menuItem) {
          if (menuItem.value.toLowerCase().indexOf(value.toLowerCase()) === 0) {
            return true
          }
        }
      }
      return false
    },
    [menuItems]
  )

  const getIdByValue = useCallback(
    function (value: typeof TEXTBOX_MIXED_VALUE | string): ItemId {
      if (value === TEXTBOX_MIXED_VALUE || value === EMPTY_STRING) {
        return INVALID_ITEM_ID
      }
      for (const menuItem of menuItems) {
        if ('value' in menuItem) {
          if (menuItem.value === value) {
            if (typeof menuItem.id === 'undefined') {
              throw new Error('`menuItem` has no `id`')
            }
            return menuItem.id
          }
        }
      }
      return INVALID_ITEM_ID
    },
    [menuItems]
  )

  if (
    filter === true &&
    currentValue !== TEXTBOX_MIXED_VALUE &&
    (currentValue !== EMPTY_STRING || isValidValue(committedValue) === false)
  ) {
    menuItems = menuItems.filter(function (menuItem) {
      if ('value' in menuItem) {
        return (
          menuItem.value.toLowerCase().indexOf(currentValue.toLowerCase()) !==
          -1
        )
      }
      return false
    })
  }

  const findMenuItemById = useCallback(
    function (targetId: string): null | TextboxAutocompleteOption {
      const result = menuItems.find(function ({ id }) {
        return id === targetId
      })
      return typeof result === 'undefined' ? null : result
    },
    [menuItems]
  )

  const computeNextId = useCallback(
    function (id: ItemId): ItemId {
      if (id === INVALID_ITEM_ID) {
        const result = menuItems[0].id
        if (typeof result === 'undefined') {
          throw new Error('`menuItem[0]` has no `id`')
        }
        return result
      }
      let foundCurrentMenuItem = false
      let index = -1
      while (index++ < menuItems.length - 1) {
        const menuItem = menuItems[index]
        if ('value' in menuItem) {
          if (foundCurrentMenuItem === true) {
            // We've found the item after the current menu item with a `.value`
            break
          }
          if (menuItem.id === id) {
            foundCurrentMenuItem = true
          }
        }
      }
      if (index === menuItems.length) {
        // Reached the end of `menuItems`
        if (getIdByValue(currentValue) === INVALID_ITEM_ID) {
          return INVALID_ITEM_ID
        }
        const result = menuItems[0].id
        if (typeof result === 'undefined') {
          throw new Error('`menuItem[0]` has no `id`')
        }
        return result
      }
      const result = menuItems[index].id
      if (typeof result === 'undefined') {
        throw new Error(`\`menuItem[${index}]\` has no \`id\``)
      }
      return result
    },
    [currentValue, getIdByValue, menuItems]
  )

  const computePreviousId = useCallback(
    function (id: ItemId): ItemId {
      if (id === INVALID_ITEM_ID) {
        const index = menuItems.length - 1
        const result = menuItems[index].id
        if (typeof result === 'undefined') {
          throw new Error(`\`menuItem[${index}]\` has no \`id\``)
        }
        return result
      }
      let foundCurrentMenuItem = false
      let index = menuItems.length
      while (index-- > 0) {
        const menuItem = menuItems[index]
        if ('value' in menuItem) {
          if (foundCurrentMenuItem === true) {
            // We've found the item after the current menu item with a `.value`
            break
          }
          if (menuItem.id === id) {
            foundCurrentMenuItem = true
          }
        }
      }
      if (index === -1) {
        // Reached the beginning of `menuItems`
        if (getIdByValue(currentValue) === INVALID_ITEM_ID) {
          return INVALID_ITEM_ID
        }
        const index = menuItems.length - 1
        const result = menuItems[index].id
        if (typeof result === 'undefined') {
          throw new Error(`\`menuItem[${index}]\` has no \`id\``)
        }
        return result
      }
      const result = menuItems[index].id
      if (typeof result === 'undefined') {
        throw new Error(`\`menuItem[${index}]\` has no \`id\``)
      }
      return result
    },
    [currentValue, getIdByValue, menuItems]
  )

  const handleFocus: JSX.FocusEventHandler<HTMLInputElement> = useCallback(
    function () {
      setIsMenuVisible(true)
      if (
        committedValue !== EMPTY_STRING &&
        isValidValue(committedValue) === false
      ) {
        // Copy over `committedValue` to `currentValue`
        setCurrentValue(committedValue)
      }
    },
    [committedValue, isValidValue]
  )

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
        event.preventDefault()
        if (menuItems.length === 0) {
          return
        }
        if (isMenuVisible === false) {
          setIsMenuVisible(true)
          return
        }
        const nextId =
          keyCode === UP_KEY_CODE
            ? computePreviousId(selectedId)
            : computeNextId(selectedId)
        shouldSelectAllRef.current = true
        setSelectedId(nextId)
        if (nextId === INVALID_ITEM_ID) {
          onChange(currentValue, name, event)
        } else {
          const menuItem = findMenuItemById(nextId)
          if (menuItem !== null && 'value' in menuItem) {
            const newValue = menuItem.value
            onChange(newValue, name, event)
          }
        }
        return
      }
      if (
        keyCode === ENTER_KEY_CODE ||
        keyCode === ESCAPE_KEY_CODE ||
        keyCode === TAB_KEY_CODE // Tabbing away from this component
      ) {
        event.preventDefault()
        if (keyCode === ENTER_KEY_CODE && isMenuVisible === false) {
          // Show the menu if it is currently hidden.
          setIsMenuVisible(true)
          event.stopPropagation()
          return
        }
        if (keyCode === ESCAPE_KEY_CODE && isMenuVisible === false) {
          // Blur the textbox if the menu is currently already hidden.
          getCurrentFromRef(inputElementRef).blur()
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          return
        }
        event.stopPropagation()
        shouldSelectAllRef.current = false
        scrollTopRef.current = getCurrentFromRef(menuElementRef).scrollTop
        setIsMenuVisible(false)
        return
      }
      if (strict === false) {
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue = computeNextValue(
          getCurrentFromRef(inputElementRef),
          event.key
        )
        if (isValidValue(nextValue) === false) {
          event.preventDefault()
        }
      }
    },
    [
      computeNextId,
      computePreviousId,
      currentValue,
      findMenuItemById,
      isMenuVisible,
      propagateEscapeKeyDown,
      strict,
      isValidValue,
      menuItems.length,
      name,
      onChange,
      selectedId
    ]
  )

  const handleKeyUp: JSX.KeyboardEventHandler<HTMLInputElement> = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (
        keyCode !== BACKSPACE_KEY_CODE &&
        keyCode !== DELETE_KEY_CODE &&
        isKeyCodeCharacterGenerating(keyCode) === false
      ) {
        return
      }
      const value = getCurrentFromRef(inputElementRef).value
      const index = getIdByValue(value)
      setIsMenuVisible(true)
      setSelectedId(index)
      setCurrentValue(value)
      onChange(value, name, event)
    },
    [getIdByValue, name, onChange]
  )

  const handleOptionClick: JSX.MouseEventHandler<HTMLDivElement> = useCallback(
    function (event: MouseEvent) {
      scrollTopRef.current = getCurrentFromRef(menuElementRef).scrollTop
      const id = (event.target as HTMLElement).getAttribute(
        ITEM_ID_DATA_ATTRIBUTE
      ) as string
      setSelectedId(id)
      setIsMenuVisible(false)
      const menuItem = findMenuItemById(id)
      setCurrentValue(EMPTY_STRING)
      if (menuItem !== null && 'value' in menuItem) {
        const newValue = menuItem.value
        onChange(newValue, name, event)
      }
    },
    [findMenuItemById, name, onChange]
  )

  const handlePaste: JSX.ClipboardEventHandler<HTMLInputElement> = useCallback(
    function (event: ClipboardEvent) {
      if (event.clipboardData === null) {
        throw new Error('`event.clipboardData` is `null`')
      }
      const nextValue = computeNextValue(
        getCurrentFromRef(inputElementRef),
        event.clipboardData.getData('Text')
      )
      if (isValidValue(nextValue) === false) {
        event.preventDefault()
      }
    },
    [isValidValue]
  )

  // Select the contents of the input whenever `value` changes and if
  // `shouldSelectAllRef` is set to `true`
  useLayoutEffect(
    function () {
      const inputElement = getCurrentFromRef(inputElementRef)
      if (shouldSelectAllRef.current === true) {
        shouldSelectAllRef.current = false
        inputElement.focus()
        inputElement.select()
      }
    },
    [committedValue]
  )

  // Restore the original menu scroll position and update focus
  useLayoutEffect(
    function () {
      const inputElement = getCurrentFromRef(inputElementRef)
      const menuElement = getCurrentFromRef(menuElementRef)
      if (isMenuVisible === false) {
        inputElement.blur()
        setCurrentValue(EMPTY_STRING)
        return
      }
      menuElement.scrollTop = scrollTopRef.current
      inputElement.focus()
      inputElement.select()
    },
    [isMenuVisible]
  )

  // Adjust the menu scroll position so that the selected menu item is always visible
  useLayoutEffect(
    function () {
      if (isMenuVisible === false || menuItems.length === 0) {
        return
      }
      const menuElement = getCurrentFromRef(menuElementRef)
      if (selectedId === INVALID_ITEM_ID) {
        menuElement.scrollTop = 0
        return
      }
      const selectedElement = Array.prototype.slice
        .call(menuElement.children)
        .find(function (element: HTMLElement) {
          return (
            element.getAttribute(ITEM_ID_DATA_ATTRIBUTE) === `${selectedId}`
          )
        })
      if (typeof selectedElement === 'undefined') {
        return
      }
      if (selectedElement.offsetTop < menuElement.scrollTop) {
        menuElement.scrollTop = selectedElement.offsetTop
        return
      }
      const offsetBottom =
        selectedElement.offsetTop + selectedElement.offsetHeight
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight
      }
    },
    [isMenuVisible, menuItems.length, selectedId]
  )

  // Blur the input and hide the menu if we clicked outside the component
  useLayoutEffect(
    function () {
      function handleWindowMousedown(event: MouseEvent) {
        const rootElement = getCurrentFromRef(rootElementRef)
        if (
          isMenuVisible === false ||
          rootElement === event.target ||
          rootElement.contains(event.target as HTMLElement)
        ) {
          // Exit if we clicked on any DOM element that is part of the component
          return
        }
        scrollTopRef.current = getCurrentFromRef(menuElementRef).scrollTop
        setIsMenuVisible(false)
      }
      window.addEventListener('mousedown', handleWindowMousedown)
      return function () {
        window.removeEventListener('mousedown', handleWindowMousedown)
      }
    },
    [isMenuVisible]
  )

  useLayoutEffect(
    function () {
      if (isValidValue(committedValue) === false) {
        return
      }
      const id = getIdByValue(committedValue)
      setSelectedId(id)
    },
    [committedValue, getIdByValue, isValidValue]
  )

  return (
    <div
      ref={rootElementRef}
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        typeof icon === 'undefined' ? null : styles.hasIcon
      )}
    >
      <input
        {...rest}
        ref={inputElementRef}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onFocus={disabled === true ? undefined : handleFocus}
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        onKeyUp={disabled === true ? undefined : handleKeyUp}
        onPaste={disabled === true ? undefined : handlePaste}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type="text"
        value={committedValue === null ? '' : committedValue}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
      {disabled === false && isMenuVisible === true && menuItems.length > 0 ? (
        <div
          ref={menuElementRef}
          class={classnames(
            textboxAutocompleteStyles.menu,
            top === true ? textboxAutocompleteStyles.top : null,
            typeof icon === 'undefined'
              ? null
              : textboxAutocompleteStyles.hasIcon
          )}
        >
          {menuItems.map(function (menuItem) {
            if ('separator' in menuItem) {
              return (
                <hr
                  key={menuItem.id}
                  class={textboxAutocompleteStyles.menuSeparator}
                />
              )
            }
            if ('header' in menuItem) {
              return (
                <h1
                  key={menuItem.id}
                  class={textboxAutocompleteStyles.menuHeader}
                >
                  {menuItem.header}
                </h1>
              )
            }
            return (
              <div
                key={menuItem.id}
                class={classnames(
                  textboxAutocompleteStyles.menuItem,
                  menuItem.id === selectedId
                    ? textboxAutocompleteStyles.menuItemSelected
                    : null
                )}
                onClick={handleOptionClick}
                {...{ [ITEM_ID_DATA_ATTRIBUTE]: menuItem.id }}
              >
                {menuItem.value}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
