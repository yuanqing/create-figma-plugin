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
  focused,
  icon,
  noBorder,
  onChange,
  options,
  strict,
  value,
  ...rest
}) {
  const rootElementRef = useRef(null)
  const inputElementRef = useRef(null)
  const menuElementRef = useRef(null)
  const scrollTopRef = useRef(0)
  const shouldSelectAllRef = useRef(false)

  const initialSelectedIndex = findIndex(value)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [isMenuVisible, setMenuVisible] = useState(false)

  function findIndex (value) {
    let result = -1
    options.forEach(function (option, index) {
      if (option.value === value && result === -1) {
        result = index
      }
    })
    return result
  }

  function handleFocus () {
    setMenuVisible(true)
  }

  function handleKeyDown (event) {
    const keyCode = event.keyCode
    if (keyCode === UP_KEY_CODE || keyCode === DOWN_KEY_CODE) {
      event.preventDefault()
      let index
      if (keyCode === UP_KEY_CODE) {
        index =
          selectedIndex === null
            ? options.length - 1
            : wraparoundIndex(selectedIndex - 1, options.length)
      } else {
        index =
          selectedIndex === null
            ? 0
            : wraparoundIndex(selectedIndex + 1, options.length)
      }
      shouldSelectAllRef.current = true
      setSelectedIndex(index)
      onChange(options[index].value)
      return
    }
    if (keyCode === ENTER_KEY_CODE || keyCode === ESCAPE_KEY_CODE) {
      event.preventDefault()
      shouldSelectAllRef.current = false
      scrollTopRef.current = menuElementRef.current.scrollTop
      setMenuVisible(false)
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
      if (value !== options[selectedIndex].value) {
        setSelectedIndex(-1)
      }
    }
    onChange(value)
  }

  function handleOptionClick (index) {
    scrollTopRef.current = menuElementRef.current.scrollTop
    setSelectedIndex(index)
    setMenuVisible(false)
    onChange(options[index].value)
  }

  // Select the contents of the input whenever `value` changes
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
      const selectedElement = menuElement.children[selectedIndex]
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

  if (focused === true) {
    useLayoutEffect(function () {
      setMenuVisible(true)
    }, [])
  }

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
        value={value}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      {hasIcon === true ? <div class={styles.icon}>{icon}</div> : null}
      {isMenuVisible === true ? (
        <div class={styles.menu} ref={menuElementRef}>
          {options.map(function (option, index) {
            const className =
              index === selectedIndex ? 'menuItemSelected' : 'menuItem'
            return (
              <div
                class={styles[className]}
                onClick={handleOptionClick.bind(null, index)}
                key={index}
              >
                {option.value}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
