/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import styles from '../textbox/textbox.scss'

const ENTER_KEY_CODE = 13
const ESCAPE_KEY_CODE = 27
const UP_KEY_CODE = 38
const DOWN_KEY_CODE = 40

function wrap (index, length) {
  return index >= 0 ? index % length : length - 1
}

function findIndex (value, options) {
  let result = -1
  options.forEach(function (option, index) {
    if (option.value === value && result === -1) {
      result = index
    }
  })
  return result
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
  const withIcon = typeof icon !== 'undefined'

  const rootElement = useRef(null)
  const inputElement = useRef(null)
  const shouldSelectAll = useRef(false)

  const initialSelectedIndex = findIndex(value, options)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)

  const [isFocused, setIsFocused] = useState(false)

  function handleOptionClick (index, event) {
    setSelectedIndex(index)
    setIsFocused(false)
    onChange(options[index].value)
    inputElement.current.blur()
  }

  function handleFocus () {
    setIsFocused(true)
    inputElement.current.select()
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
            : wrap(selectedIndex - 1, options.length)
      } else {
        index =
          selectedIndex === null ? 0 : wrap(selectedIndex + 1, options.length)
      }
      setSelectedIndex(index)
      onChange(options[index].value)
      shouldSelectAll.current = true
      return
    }
    if (keyCode === ENTER_KEY_CODE || keyCode === ESCAPE_KEY_CODE) {
      event.preventDefault()
      inputElement.current.blur()
      shouldSelectAll.current = false
      setIsFocused(false)
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
    const value = inputElement.current.value
    if (selectedIndex === -1) {
      const index = findIndex(value, options)
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

  if (focused === true) {
    useEffect(function () {
      inputElement.current.focus()
      handleFocus()
    }, [])
  }

  useEffect(
    function () {
      if (shouldSelectAll.current === true) {
        inputElement.current.focus()
        inputElement.current.select()
        shouldSelectAll.current = false
      }
    },
    [value]
  )

  useEffect(function () {
    function handleWindowClick (event) {
      if (
        rootElement.current === event.target ||
        rootElement.current.contains(event.target)
      ) {
        return
      }
      setIsFocused(false)
      inputElement.current.blur()
    }
    window.addEventListener('click', handleWindowClick)
    return function () {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return (
    <div
      class={classnames(
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        withIcon === true ? styles.withIcon : null
      )}
      ref={rootElement}
    >
      <input
        {...rest}
        ref={inputElement}
        type='text'
        class={styles.input}
        value={value}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      {withIcon ? <div class={styles.icon}>{icon}</div> : null}
      {isFocused ? (
        <div class={styles.options}>
          {options.map(function (option, index) {
            return (
              <div
                class={
                  styles[index === selectedIndex ? 'optionSelected' : 'option']
                }
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
