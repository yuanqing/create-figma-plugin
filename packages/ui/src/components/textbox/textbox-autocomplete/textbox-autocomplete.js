/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useLayoutEffect, useRef, useState } from 'preact/hooks'
import styles from '../textbox.scss'

const ENTER_KEY_CODE = 13
const ESCAPE_KEY_CODE = 27
const UP_KEY_CODE = 38
const DOWN_KEY_CODE = 40

function wraparoundIndex (index, length) {
  return index >= 0 ? index % length : length - 1
}

export function TextboxAutocomplete ({
  focused: isFocused,
  icon,
  noBorder,
  onChange,
  options: menuItems,
  strict: isStrict,
  style,
  top: isTop,
  value,
  ...rest
}) {
  const rootElementRef = useRef(null)
  const inputElementRef = useRef(null)
  const menuElementRef = useRef(null)
  const scrollTopRef = useRef(0)
  const shouldSelectAllRef = useRef(false)

  // This is an array of indices in `menuItems` that are actually selectable
  const selectableMenuItemIndexes = menuItems.reduce(function (
    result,
    menuItem,
    index
  ) {
    if (typeof menuItem.value !== 'undefined') {
      result.push(index)
    }
    return result
  },
  [])

  const initialSelectedIndex = findIndex(value)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [isMenuVisible, setMenuVisible] = useState(false)

  function isValidValue (value) {
    let result = false
    selectableMenuItemIndexes.forEach(function (selectableMenuItemIndex) {
      if (
        result === false &&
        menuItems[selectableMenuItemIndex].value.indexOf(value) === 0
      ) {
        result = true
      }
    })
    return result
  }

  function findIndex (value) {
    let result = -1
    selectableMenuItemIndexes.forEach(function (
      selectableMenuItemIndex,
      index
    ) {
      if (result === -1 && menuItems[selectableMenuItemIndex].value === value) {
        result = index
      }
    })
    return result
  }

  function handleFocus () {
    setMenuVisible(true)
  }

  function resolveNextValue (insertedString) {
    const inputElement = inputElementRef.current
    const selectionStartIndex = inputElement.selectionStart
    const selectionEndIndex = inputElement.selectionEnd
    const value = inputElementRef.current.value
    if (selectionEndIndex - selectionStartIndex === 0) {
      return `${value}${insertedString}`
    }
    return `${value.substring(
      0,
      selectionStartIndex
    )}${insertedString}${value.substring(selectionEndIndex)}`
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
      event.preventDefault()
      let index
      /* eslint-disable indent */
      if (keyCode === UP_KEY_CODE) {
        index =
          selectedIndex === null
            ? selectableMenuItemIndexes.length - 1
            : wraparoundIndex(
                selectedIndex - 1,
                selectableMenuItemIndexes.length
              )
      } else {
        index =
          selectedIndex === null
            ? 0
            : wraparoundIndex(
                selectedIndex + 1,
                selectableMenuItemIndexes.length
              )
      }
      /* eslint-enable indent */
      shouldSelectAllRef.current = true
      setSelectedIndex(index)
      onChange(menuItems[selectableMenuItemIndexes[index]].value)
      return
    }
    if (keyCode === ENTER_KEY_CODE || keyCode === ESCAPE_KEY_CODE) {
      event.preventDefault()
      shouldSelectAllRef.current = false
      scrollTopRef.current = menuElementRef.current.scrollTop
      setMenuVisible(false)
    }
    if (isStrict === false) {
      return
    }
    if (event.ctrlKey === true || event.metaKey === true) {
      return
    }
    if (
      event.keyCode === 32 || // space
      (event.keyCode >= 48 && event.keyCode <= 57) || // 0 to 9
      (event.keyCode >= 65 && event.keyCode <= 90) || // A to Z
      (event.keyCode >= 96 && event.keyCode <= 105) || // Number pad
      (event.keyCode >= 186 && event.keyCode <= 192) || // ;=,-./`
      (event.keyCode >= 219 && event.keyCode <= 222) // [\]'
    ) {
      const nextValue = resolveNextValue(event.key)
      if (isValidValue(nextValue) === false) {
        event.preventDefault()
      }
    }
  }

  function handleKeyUp (event) {
    const keyCode = event.keyCode
    if (
      keyCode === UP_KEY_CODE ||
      keyCode === DOWN_KEY_CODE ||
      keyCode === ENTER_KEY_CODE ||
      keyCode === ESCAPE_KEY_CODE
    ) {
      return
    }
    const value = inputElementRef.current.value
    if (selectedIndex === -1) {
      const index = findIndex(value)
      if (index !== -1) {
        setSelectedIndex(index)
      }
    } else {
      if (value !== menuItems[selectableMenuItemIndexes[selectedIndex]].value) {
        setSelectedIndex(-1)
      }
    }
    onChange(value)
  }

  function handleOptionClick (index) {
    scrollTopRef.current = menuElementRef.current.scrollTop
    setSelectedIndex(index)
    setMenuVisible(false)
    onChange(menuItems[selectableMenuItemIndexes[index]].value)
  }

  function handlePaste (event) {
    const nextValue = resolveNextValue(event.clipboardData.getData('Text'))
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
    [value]
  )

  // Restore the original menu scroll position and update focus
  useLayoutEffect(
    function () {
      if (isMenuVisible === false) {
        inputElementRef.current.blur()
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
      if (isMenuVisible === false || selectedIndex === -1) {
        return
      }
      const menuElement = menuElementRef.current
      const selectedElement = [].slice
        .call(menuElement.children)
        .find(function (element) {
          return element.getAttribute('data-index') === `${selectedIndex}`
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
    [isMenuVisible, selectedIndex]
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

  if (isFocused === true) {
    useLayoutEffect(function () {
      setMenuVisible(true)
    }, [])
  }

  const hasIcon = typeof icon !== 'undefined'
  const selectedMenuItemIndex = selectableMenuItemIndexes[selectedIndex]
  let menuItemIndex = 0
  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        hasIcon === true ? styles.hasIcon : null
      )}
      ref={rootElementRef}
      style={style}
    >
      <input
        {...rest}
        ref={inputElementRef}
        type='text'
        class={styles.input}
        value={value}
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
          {menuItems.map(function (menuItem, index) {
            if (menuItem.separator === true) {
              return <hr class={styles.menuSeparator} key={index} />
            }
            if (typeof menuItem.header !== 'undefined') {
              return (
                <h2 class={styles.menuHeader} key={index}>
                  {menuItem.header}
                </h2>
              )
            }
            const className =
              index === selectedMenuItemIndex ? 'menuItemSelected' : 'menuItem'
            return (
              <div
                class={styles[className]}
                onClick={handleOptionClick.bind(null, menuItemIndex)}
                data-index={menuItemIndex++}
                key={index}
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
