/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'
import {
  BACKSPACE_KEY_CODE,
  DELETE_KEY_CODE,
  DOWN_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE,
  UP_KEY_CODE
} from '../../../utilities/key-codes'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import '../../../scss/base.scss'
import styles from '../textbox.scss'
import textboxAutocompleteStyles from './textbox-autocomplete.scss'

const EMPTY_STRING = ''
const INVALID_ID = -1

export function TextboxAutocomplete ({
  disabled: isDisabled,
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
}) {
  const rootElementRef = useRef(null)
  const inputElementRef = useRef(null)
  const menuElementRef = useRef(null)
  const scrollTopRef = useRef(0)
  const shouldSelectAllRef = useRef(false)

  const [currentValue, setCurrentValue] = useState(EMPTY_STRING)
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [selectedId, setSelectedId] = useState(INVALID_ID)

  let menuItems = options.map(function (option, index) {
    return {
      __id: index,
      ...option
    }
  })

  const isValidValue = useCallback(
    function (value) {
      if (value === EMPTY_STRING || value === null) {
        return true
      }
      for (const menuItem of menuItems) {
        if (
          typeof menuItem.value !== 'undefined' &&
          menuItem.value.toLowerCase().indexOf(value.toLowerCase()) === 0
        ) {
          return true
        }
      }
      return false
    },
    [menuItems]
  )

  const getIdByValue = useCallback(
    function (value) {
      if (value === EMPTY_STRING || value === null) {
        return INVALID_ID
      }
      for (const menuItem of menuItems) {
        if (menuItem.value === value) {
          return menuItem.__id
        }
      }
      return INVALID_ID
    },
    [menuItems]
  )

  if (
    shouldFilter === true &&
    (isValidValue(committedValue) === false || currentValue !== EMPTY_STRING)
  ) {
    menuItems = menuItems.filter(function (menuItem) {
      return (
        typeof menuItem.value !== 'undefined' &&
        menuItem.value.toLowerCase().indexOf(currentValue.toLowerCase()) !== -1
      )
    })
  }

  const getMenuItemById = useCallback(
    function (id) {
      for (const menuItem of menuItems) {
        if (menuItem.__id === id) {
          return menuItem
        }
      }
      return null
    },
    [menuItems]
  )

  const computeNextId = useCallback(
    function (id) {
      if (id === INVALID_ID) {
        return menuItems[0].__id
      }
      let foundCurrentMenuItem = false
      let index = -1
      while (index++ < menuItems.length - 1) {
        if (typeof menuItems[index].value !== 'undefined') {
          if (foundCurrentMenuItem === true) {
            // We've found the item after the current menu item with a `.value`
            break
          }
          if (menuItems[index].__id === id) {
            foundCurrentMenuItem = true
          }
        }
      }
      if (index === menuItems.length) {
        // Reached the end of `menuItems`
        return getIdByValue(currentValue) === -1
          ? INVALID_ID
          : menuItems[0].__id
      }
      return menuItems[index].__id
    },
    [currentValue, getIdByValue, menuItems]
  )

  const computePreviousId = useCallback(
    function (id) {
      if (id === INVALID_ID) {
        return menuItems[menuItems.length - 1].__id
      }
      let foundCurrentMenuItem = false
      let index = menuItems.length
      while (index-- > 0) {
        if (typeof menuItems[index].value !== 'undefined') {
          if (foundCurrentMenuItem === true) {
            // We've found the item after the current menu item with a `.value`
            break
          }
          if (menuItems[index].__id === id) {
            foundCurrentMenuItem = true
          }
        }
      }
      if (index === -1) {
        // Reached the beginning of `menuItems`
        return getIdByValue(currentValue) === -1
          ? INVALID_ID
          : menuItems[menuItems.length - 1].__id
      }
      return menuItems[index].__id
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
        setCurrentValue(committedValue)
      }
    },
    [committedValue, isValidValue]
  )

  const handleKeyDown = useCallback(
    function (event) {
      const keyCode = event.keyCode
      if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
        event.preventDefault()
        if (isMenuVisible === false || menuItems.length === 0) {
          return
        }
        const nextId =
          keyCode === UP_KEY_CODE
            ? computePreviousId(selectedId)
            : computeNextId(selectedId)
        shouldSelectAllRef.current = true
        setSelectedId(nextId)
        if (nextId === INVALID_ID) {
          onChange({ [name]: currentValue })
        } else {
          const menuItem = getMenuItemById(nextId)
          onChange({ [name]: menuItem.value })
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
    function (event) {
      const keyCode = event.keyCode
      if (
        keyCode !== BACKSPACE_KEY_CODE &&
        keyCode !== DELETE_KEY_CODE &&
        isKeyCodeCharacterGenerating(keyCode) === false
      ) {
        return
      }
      const value = inputElementRef.current.value
      const index = getIdByValue(value)
      setSelectedId(index)
      setCurrentValue(value)
      onChange({ [name]: value })
    },
    [getIdByValue, name, onChange]
  )

  const handleOptionClick = useCallback(
    function (event) {
      scrollTopRef.current = menuElementRef.current.scrollTop
      const id = parseInt(event.target.getAttribute('data-id'))
      setSelectedId(id)
      setMenuVisible(false)
      const menuItem = getMenuItemById(id)
      setCurrentValue(EMPTY_STRING)
      onChange({ [name]: menuItem.value })
    },
    [getMenuItemById, name, onChange]
  )

  function handlePaste (event) {
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
      if (isMenuVisible === false || menuItems.length === 0) {
        return
      }
      const menuElement = menuElementRef.current
      if (selectedId === INVALID_ID) {
        menuElement.scrollTop = 0
        return
      }
      const selectedElement = [].slice
        .call(menuElement.children)
        .find(function (element) {
          return element.getAttribute('data-id') === `${selectedId}`
        })
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
      function handleWindowMousedown (event) {
        if (
          isMenuVisible === false ||
          rootElementRef.current === event.target ||
          rootElementRef.current.contains(event.target)
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
        onFocus={isDisabled === true ? null : handleFocus}
        onKeyDown={isDisabled === true ? null : handleKeyDown}
        onKeyUp={isDisabled === true ? null : handleKeyUp}
        onPaste={isDisabled === true ? null : handlePaste}
        tabIndex='0'
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
            if (menuItem.separator === true) {
              return (
                <hr
                  class={textboxAutocompleteStyles.menuSeparator}
                  key={menuItem.__id}
                />
              )
            }
            if (typeof menuItem.header !== 'undefined') {
              return (
                <h1
                  class={textboxAutocompleteStyles.menuHeader}
                  key={menuItem.__id}
                >
                  {menuItem.header}
                </h1>
              )
            }
            return (
              <div
                class={classnames(
                  textboxAutocompleteStyles.menuItem,
                  menuItem.__id === selectedId
                    ? textboxAutocompleteStyles.menuItemSelected
                    : null
                )}
                onClick={handleOptionClick}
                data-id={menuItem.__id}
                key={menuItem.__id}
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
