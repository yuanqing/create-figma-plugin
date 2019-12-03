/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'
import { computeNextValue } from '../utilities/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../utilities/is-keycode-character-generating'
import {
  BACKSPACE_KEY_CODE,
  DELETE_KEY_CODE,
  DOWN_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  UP_KEY_CODE
} from '../utilities/key-codes'
import '../../../scss/base.scss'
import styles from '../textbox.scss'

const EMPTY_STRING = ''
const INVALID_ID = -1

export function TextboxAutocomplete ({
  filter: shouldFilter,
  focused: isFocused,
  icon,
  name,
  noBorder,
  onChange,
  options,
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
      id: index,
      ...option
    }
  })

  const isValidValue = useCallback(
    function (value) {
      if (value === EMPTY_STRING) {
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
      for (const menuItem of menuItems) {
        if (menuItem.value === value) {
          return menuItem.id
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

  function getValueById (id) {
    for (const menuItem of menuItems) {
      if (menuItem.id === id) {
        return menuItem.value
      }
    }
    return null
  }

  function computeNextId (id) {
    if (id === INVALID_ID) {
      return menuItems[0].id
    }
    let foundCurrentMenuItem = false
    let index = -1
    while (index++ < menuItems.length - 1) {
      if (typeof menuItems[index].value !== 'undefined') {
        if (foundCurrentMenuItem === true) {
          // We've found the item after the current menu item with a `.value`
          break
        }
        if (menuItems[index].id === id) {
          foundCurrentMenuItem = true
        }
      }
    }
    if (index === menuItems.length) {
      // Reached the end of `menuItems`
      return getIdByValue(currentValue) === -1 ? INVALID_ID : menuItems[0].id
    }
    return menuItems[index].id
  }

  function computePreviousId (id) {
    if (id === INVALID_ID) {
      return menuItems[menuItems.length - 1].id
    }
    let foundCurrentMenuItem = false
    let index = menuItems.length
    while (index-- > 0) {
      if (typeof menuItems[index].value !== 'undefined') {
        if (foundCurrentMenuItem === true) {
          // We've found the item after the current menu item with a `.value`
          break
        }
        if (menuItems[index].id === id) {
          foundCurrentMenuItem = true
        }
      }
    }
    if (index === -1) {
      // Reached the beginning of `menuItems`
      return getIdByValue(currentValue) === -1
        ? INVALID_ID
        : menuItems[menuItems.length - 1].id
    }
    return menuItems[index].id
  }

  function handleFocus () {
    setMenuVisible(true)
    if (
      committedValue !== EMPTY_STRING &&
      isValidValue(committedValue) === false
    ) {
      // Copy over `committedValue` to `currentValue`
      setCurrentValue(committedValue)
    }
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
      event.preventDefault()
      const nextId =
        keyCode === UP_KEY_CODE
          ? computePreviousId(selectedId)
          : computeNextId(selectedId)
      shouldSelectAllRef.current = true
      setSelectedId(nextId)
      onChange(
        nextId === INVALID_ID ? currentValue : getValueById(nextId),
        name
      )
      return
    }
    if (keyCode === ENTER_KEY_CODE || keyCode === ESCAPE_KEY_CODE) {
      event.preventDefault()
      event.stopPropagation()
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
  }

  function handleKeyUp (event) {
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
    onChange(value, name)
  }

  function handleOptionClick (event) {
    scrollTopRef.current = menuElementRef.current.scrollTop
    const id = parseInt(event.target.getAttribute('data-id'))
    setSelectedId(id)
    setMenuVisible(false)
    const value = getValueById(id)
    setCurrentValue(EMPTY_STRING)
    onChange(value, name)
  }

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
      if (isMenuVisible === false) {
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
    [isMenuVisible, selectedId]
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
      if (isFocused === true) {
        setMenuVisible(true)
      }
    },
    [isFocused]
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
        class={styles.input}
        name={name}
        value={committedValue}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onPaste={handlePaste}
      />
      {hasIcon === true ? <div class={styles.icon}>{icon}</div> : null}
      {isMenuVisible === true ? (
        <div
          class={classnames(styles.menu, isTop ? styles.isTop : null)}
          ref={menuElementRef}
        >
          {menuItems.map(function (menuItem) {
            if (menuItem.separator === true) {
              return <hr class={styles.menuSeparator} key={menuItem.id} />
            }
            if (typeof menuItem.header !== 'undefined') {
              return (
                <h2 class={styles.menuHeader} key={menuItem.id}>
                  {menuItem.header}
                </h2>
              )
            }
            return (
              <div
                class={classnames(
                  styles.menuItem,
                  menuItem.id === selectedId ? styles.menuItemSelected : null
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
