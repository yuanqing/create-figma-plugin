/** @jsx h */
import '../../../scss/base.scss'

import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'

import { Option } from '../../../types'
import {
  BACKSPACE_KEY_CODE,
  DELETE_KEY_CODE,
  DOWN_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE,
  UP_KEY_CODE
} from '../../../utilities/key-codes'
import { TextboxProps } from '../textbox'
import styles from '../textbox.scss'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import textboxAutocompleteStyles from './textbox-autocomplete.scss'

const EMPTY_STRING = ''
const INVALID_MENU_ITEM_ID = null

type MenuItemId = null | string

export interface TextboxAutocompleteProps extends TextboxProps {
  filter?: boolean
  options: Option[]
  strict?: boolean
  top?: boolean
}

export type TextboxAutocompleteOption = Option

type Value = null | string

export function TextboxAutocomplete ({
  disabled: isDisabled,
  focused: isFocused,
  filter: shouldFilter,
  icon,
  name,
  noBorder,
  onChange,
  options,
  placeholder,
  strict: isStrict,
  top: isTop,
  value: committedValue,
  ...rest
}: TextboxAutocompleteProps): h.JSX.Element {
  const rootElementRef: preact.RefObject<HTMLDivElement> = useRef(null)
  const inputElementRef: preact.RefObject<HTMLInputElement> = useRef(null)
  const menuElementRef: preact.RefObject<HTMLDivElement> = useRef(null)
  const scrollTopRef = useRef(0)
  const shouldSelectAllRef = useRef(false)

  const [currentValue, setCurrentValue]: [Value, any] = useState(EMPTY_STRING)
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [selectedId, setSelectedId]: [MenuItemId, any] = useState(
    INVALID_MENU_ITEM_ID
  )

  let menuItems: Option[] = options.map(function (option, index) {
    return {
      id: `${index}`,
      ...option
    }
  })

  const isValidValue = useCallback(
    function (value: Value) {
      if (value === EMPTY_STRING || value === null) {
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
    function (value: Value) {
      if (value === EMPTY_STRING || value === null) {
        return INVALID_MENU_ITEM_ID
      }
      for (const menuItem of menuItems) {
        if ('value' in menuItem) {
          if (menuItem.value === value) {
            return menuItem.id
          }
        }
      }
      return INVALID_MENU_ITEM_ID
    },
    [menuItems]
  )

  if (
    shouldFilter === true &&
    (isValidValue(committedValue) === false || currentValue !== EMPTY_STRING)
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

  const getMenuItemById = useCallback(
    function (id: MenuItemId) {
      for (const menuItem of menuItems) {
        if (menuItem.id === id) {
          return menuItem
        }
      }
      return null
    },
    [menuItems]
  )

  const computeNextId = useCallback(
    function (id: MenuItemId) {
      if (id === INVALID_MENU_ITEM_ID) {
        return menuItems[0].id
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
        return getIdByValue(currentValue) === INVALID_MENU_ITEM_ID
          ? INVALID_MENU_ITEM_ID
          : menuItems[0].id
      }
      return menuItems[index].id
    },
    [currentValue, getIdByValue, menuItems]
  )

  const computePreviousId = useCallback(
    function (id: MenuItemId) {
      if (id === INVALID_MENU_ITEM_ID) {
        return menuItems[menuItems.length - 1].id
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
        return getIdByValue(currentValue) === INVALID_MENU_ITEM_ID
          ? INVALID_MENU_ITEM_ID
          : menuItems[menuItems.length - 1].id
      }
      return menuItems[index].id
    },
    [currentValue, getIdByValue, menuItems]
  )

  const handleFocus = useCallback(
    function () {
      setMenuVisible(true)
      if (
        committedValue !== EMPTY_STRING &&
        isValidValue(committedValue) === false
      ) {
        // Copy over `committedValue` to `currentValue`
        setCurrentValue(committedValue as string)
      }
    },
    [committedValue, isValidValue]
  )

  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
        event.preventDefault()
        if (isMenuVisible === false || menuItems.length === 0) {
          return
        }
        const nextId =
          keyCode === UP_KEY_CODE
            ? computePreviousId(selectedId as MenuItemId)
            : computeNextId(selectedId as MenuItemId)
        shouldSelectAllRef.current = true
        setSelectedId(nextId as MenuItemId)
        if (nextId === INVALID_MENU_ITEM_ID) {
          onChange({ [name]: currentValue }, currentValue, name, event)
        } else {
          const menuItem = getMenuItemById(nextId as MenuItemId)
          if (menuItem !== null && 'value' in menuItem) {
            const newValue = menuItem.value
            onChange({ [name]: newValue }, newValue, name, event)
          }
        }
        return
      }
      if (
        keyCode === ENTER_KEY_CODE ||
        keyCode === ESCAPE_KEY_CODE ||
        keyCode === TAB_KEY_CODE
      ) {
        if (keyCode === ENTER_KEY_CODE || keyCode === ESCAPE_KEY_CODE) {
          event.preventDefault()
          event.stopPropagation()
        }
        shouldSelectAllRef.current = false
        if (
          menuElementRef.current === null ||
          typeof menuElementRef.current === 'undefined'
        ) {
          return
        }
        scrollTopRef.current = menuElementRef.current.scrollTop
        setMenuVisible(false)
        return
      }
      if (isStrict !== true) {
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        if (
          inputElementRef.current === null ||
          typeof inputElementRef.current === 'undefined'
        ) {
          return
        }
        const nextValue = computeNextValue(inputElementRef.current, event.key)
        if (isValidValue(nextValue) === false) {
          event.preventDefault()
        }
      }
    },
    [
      computeNextId,
      computePreviousId,
      currentValue,
      getMenuItemById,
      isMenuVisible,
      isStrict,
      isValidValue,
      menuItems.length,
      name,
      onChange,
      selectedId
    ]
  )

  const handleKeyUp = useCallback(
    function (event: KeyboardEvent) {
      const keyCode = event.keyCode
      if (
        keyCode !== BACKSPACE_KEY_CODE &&
        keyCode !== DELETE_KEY_CODE &&
        isKeyCodeCharacterGenerating(keyCode) === false
      ) {
        return
      }
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      const value = inputElementRef.current.value
      const index = getIdByValue(value)
      setSelectedId(index)
      setCurrentValue(value)
      onChange({ [name]: value }, value, name, event)
    },
    [getIdByValue, name, onChange]
  )

  const handleOptionClick = useCallback(
    function (event: MouseEvent) {
      if (
        menuElementRef.current === null ||
        typeof menuElementRef.current === 'undefined'
      ) {
        return
      }
      scrollTopRef.current = menuElementRef.current.scrollTop
      const id = (event.target as HTMLElement).getAttribute('data-id')
      setSelectedId(id)
      setMenuVisible(false)
      const menuItem = getMenuItemById(id)
      setCurrentValue(EMPTY_STRING)
      if (menuItem !== null && 'value' in menuItem) {
        const newValue = menuItem.value
        onChange({ [name]: newValue }, newValue, name, event)
      }
    },
    [getMenuItemById, name, onChange]
  )

  function handlePaste (event: ClipboardEvent) {
    if (
      inputElementRef.current === null ||
      typeof inputElementRef.current === 'undefined' ||
      event.clipboardData === null
    ) {
      return
    }
    const nextValue = computeNextValue(
      inputElementRef.current,
      event.clipboardData.getData('Text')
    )
    if (isValidValue(nextValue) === false) {
      event.preventDefault()
    }
  }

  // Select the contents of the input whenever `value` changes and if
  // `shouldSelectAllRef` is set to `true`
  useLayoutEffect(
    function () {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined'
      ) {
        return
      }
      if (shouldSelectAllRef.current === true) {
        shouldSelectAllRef.current = false
        inputElementRef.current.focus()
        inputElementRef.current.select()
      }
    },
    [committedValue]
  )

  // Restore the original menu scroll position and update focus
  useLayoutEffect(
    function () {
      if (
        inputElementRef.current === null ||
        typeof inputElementRef.current === 'undefined' ||
        menuElementRef.current === null ||
        typeof menuElementRef.current === 'undefined'
      ) {
        return
      }
      if (isMenuVisible === false) {
        inputElementRef.current.blur()
        setCurrentValue(EMPTY_STRING)
        return
      }
      menuElementRef.current.scrollTop = scrollTopRef.current
      inputElementRef.current.focus()
      inputElementRef.current.select()
    },
    [isMenuVisible]
  )

  // Adjust the menu scroll position so that the selected menu item is always visible
  useLayoutEffect(
    function () {
      if (
        menuElementRef.current === null ||
        typeof menuElementRef.current === 'undefined'
      ) {
        return
      }
      if (isMenuVisible === false || menuItems.length === 0) {
        return
      }
      const menuElement = menuElementRef.current
      if (selectedId === INVALID_MENU_ITEM_ID) {
        menuElement.scrollTop = 0
        return
      }
      const selectedElement = Array.prototype.slice
        .call(menuElement.children)
        .find(function (element: HTMLElement) {
          return element.getAttribute('data-id') === `${selectedId}`
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
      function handleWindowMousedown (event: MouseEvent) {
        if (
          menuElementRef.current === null ||
          typeof menuElementRef.current === 'undefined' ||
          rootElementRef.current === null ||
          typeof rootElementRef.current === 'undefined'
        ) {
          return
        }
        if (
          isMenuVisible === false ||
          rootElementRef.current === event.target ||
          rootElementRef.current.contains(event.target as HTMLElement)
        ) {
          // Exit if we clicked on any DOM element that is part of the component
          return
        }
        scrollTopRef.current = menuElementRef.current.scrollTop
        setMenuVisible(false)
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

  const hasIcon = typeof icon !== 'undefined'
  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        hasIcon === true ? styles.hasIcon : null
      )}
      ref={rootElementRef}
    >
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        name={name}
        class={styles.input}
        placeholder={placeholder}
        value={committedValue === null ? '' : committedValue}
        disabled={isDisabled === true}
        onFocus={isDisabled === true ? undefined : handleFocus}
        onKeyDown={isDisabled === true ? undefined : handleKeyDown}
        onKeyUp={isDisabled === true ? undefined : handleKeyUp}
        onPaste={isDisabled === true ? undefined : handlePaste}
        tabIndex={isDisabled === true ? undefined : 0}
        data-initial-focus={isFocused === true}
      />
      {hasIcon === true ? <div class={styles.icon}>{icon}</div> : null}
      {isDisabled !== true && isMenuVisible === true && menuItems.length > 0 ? (
        <div
          class={classnames(
            textboxAutocompleteStyles.menu,
            isTop === true ? textboxAutocompleteStyles.isTop : null,
            hasIcon === true ? textboxAutocompleteStyles.hasIcon : null
          )}
          ref={menuElementRef}
        >
          {menuItems.map(function (menuItem) {
            if ('separator' in menuItem) {
              return (
                <hr
                  class={textboxAutocompleteStyles.menuSeparator}
                  key={menuItem.id}
                />
              )
            }
            if ('header' in menuItem) {
              return (
                <h1
                  class={textboxAutocompleteStyles.menuHeader}
                  key={menuItem.id}
                >
                  {menuItem.header}
                </h1>
              )
            }
            return (
              <div
                class={classnames(
                  textboxAutocompleteStyles.menuItem,
                  menuItem.id === selectedId
                    ? textboxAutocompleteStyles.menuItemSelected
                    : null
                )}
                onClick={handleOptionClick}
                data-id={menuItem.id}
                key={menuItem.id}
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
