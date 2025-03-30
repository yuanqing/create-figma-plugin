import { ComponentChildren, h, RefObject } from 'preact'
import { createPortal } from 'preact/compat'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import menuStyles from '../../css/menu.module.css'
import { useMouseDownOutside } from '../../hooks/use-mouse-down-outside.js'
import { useScrollableMenu } from '../../hooks/use-scrollable-menu.js'
import { IconCheck16 } from '../../icons/icon-16/icon-check-16.js'
import { IconChevronDown16 } from '../../icons/icon-16/icon-chevron-down-16.js'
import { IconClose24 } from '../../icons/icon-24/icon-close-24.js'
import { IconSearch24 } from '../../icons/icon-24/icon-search-24.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref.js'
import { noop } from '../../utilities/no-op.js'
import {
  INVALID_ID,
  ITEM_ID_DATA_ATTRIBUTE_NAME
} from '../../utilities/private/constants.js'
import { Id } from './private/types.js'
import { updateMenuElementLayout } from './private/update-menu-element-layout.js'
import styles from './search-dropdown.module.css'

const EMPTY_STRING = ''

export interface SearchDropdownOptionHeader {
  header: string
}

export type SearchDropdownOptionSeparator = '-'

export interface SearchDropdownOptionValue {
  disabled?: boolean
  text?: string
  value: string
}

export type SearchDropdownOption =
  | SearchDropdownOptionHeader
  | SearchDropdownOptionSeparator
  | SearchDropdownOptionValue

export interface SearchDropdownProps
  extends FocusableComponentProps<HTMLDivElement> {
  clearOnEscapeKeyDown?: boolean
  disabled?: boolean
  icon?: ComponentChildren
  onChange?: EventHandler.onChange<HTMLInputElement>
  onFocus?: EventHandler.onFocus<HTMLInputElement>
  onKeyDown?: EventHandler.onKeyDown<HTMLDivElement>
  onMouseDown?: EventHandler.onMouseDown<HTMLDivElement>
  onValueChange?: EventHandler.onValueChange<string | null>
  options: Array<SearchDropdownOption>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  spellCheck?: boolean
  value: null | string
  /** Controlled search input value */
  searchValue?: string
  /** Called when the search input value changes */
  onSearchValueInput?: (newValue: string) => void
  /** Props to apply to the input element */
  inputProps?: Record<string, unknown>
}

export const SearchDropdown = createComponent<
  HTMLDivElement,
  SearchDropdownProps
>(function (
  {
    clearOnEscapeKeyDown = false,
    disabled = false,
    icon,
    onChange = noop,
    onFocus = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onValueChange = noop,
    onSearchValueInput = noop,
    options,
    placeholder,
    propagateEscapeKeyDown = true,
    spellCheck = false,
    value,
    searchValue: propSearchValue,
    inputProps = {},
    ...rest
  },
  ref
) {
  // Allow controlled or uncontrolled search input:
  const [internalSearchValue, setInternalSearchValue] = useState('')
  const searchValue =
    propSearchValue !== undefined ? propSearchValue : internalSearchValue

  // Track if the user is actively searching
  const [isSearching, setIsSearching] = useState(false)

  // Get the current selected option's display text
  const getSelectedOptionText = useCallback(() => {
    if (value === null) return ''
    const index = findOptionIndexByValue(options, value)
    if (index === -1) return ''
    return String(getDropdownOptionValue(options[index]))
  }, [options, value])

  // Determine what to show in the input
  const displayValue = isSearching ? searchValue : getSelectedOptionText()

  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const menuContainerRef: RefObject<HTMLDivElement> = useRef(null)

  const handleClearButtonClick = useCallback(
    function (event: { stopPropagation: () => void }) {
      event.stopPropagation()

      const inputElement = getCurrentFromRef(inputElementRef)
      if (inputElement) {
        // Clear everything
        inputElement.value = EMPTY_STRING
        if (propSearchValue === undefined) {
          setInternalSearchValue(EMPTY_STRING)
        }
        onSearchValueInput(EMPTY_STRING)
        onValueChange(null)
        setIsSearching(false)

        const inputEvent = new window.Event('input', {
          bubbles: true,
          cancelable: true
        })
        inputElement.dispatchEvent(inputEvent)
        inputElement.focus()
      }
    },
    [onSearchValueInput, onValueChange, propSearchValue]
  )

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [menuPosition, setMenuPosition] = useState({
    isAbove: false,
    left: 0,
    top: 0,
    width: 0
  })

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

  const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } =
    useScrollableMenu({
      itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
      menuElementRef,
      selectedId,
      setSelectedId
    })

  useEffect(() => {
    // Filter options based on the search input
    if (searchValue === '') {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option, index, array) => {
        if (typeof option === 'string') {
          // For separators, check if there are any matching options after it until the next header or separator
          const nextHeaderIndex = array.findIndex(
            (opt, i) =>
              i > index && (typeof opt === 'string' || 'header' in opt)
          )
          const relevantOptions = array.slice(
            index + 1,
            nextHeaderIndex === -1 ? array.length : nextHeaderIndex
          )
          return relevantOptions.some(
            (opt) =>
              typeof opt !== 'string' &&
              !('header' in opt) &&
              (opt.text || opt.value)
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          )
        }
        if ('header' in option) {
          // For headers, check if there are any matching options after it until the next header or separator
          const nextHeaderIndex = array.findIndex(
            (opt, i) =>
              i > index && (typeof opt === 'string' || 'header' in opt)
          )
          const relevantOptions = array.slice(
            index + 1,
            nextHeaderIndex === -1 ? array.length : nextHeaderIndex
          )
          return relevantOptions.some(
            (opt) =>
              typeof opt !== 'string' &&
              !('header' in opt) &&
              (opt.text || opt.value)
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          )
        }
        // Filter by value or text if available
        const optionText = option.text || option.value
        return optionText.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredOptions(filtered)
    }
  }, [searchValue, options])

  const triggerRootBlur = useCallback(function () {
    getCurrentFromRef(rootElementRef).blur()
  }, [])

  const triggerRootFocus = useCallback(function () {
    getCurrentFromRef(rootElementRef).focus()
  }, [])

  const updateMenuPosition = useCallback(function () {
    const rootElement = getCurrentFromRef(rootElementRef)
    const menuElement = getCurrentFromRef(menuElementRef)
    if (rootElement && menuElement) {
      const rect = rootElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Calculate the actual menu height rather than using a hardcoded value
      const menuHeight = menuElement.offsetHeight || 0

      // Calculate available space
      const spaceBelow = viewportHeight - rect.bottom

      // Position above if we're close to the bottom of the viewport
      if (spaceBelow < menuHeight && rect.top > menuHeight) {
        setMenuPosition({
          isAbove: true,
          left: rect.left,
          // For "above" positioning, we set top to a value that will position the menu above
          top: rect.top - menuHeight - 8, // Position above with 8px gap
          width: rect.width
        })
      } else {
        // Position below (default)
        setMenuPosition({
          isAbove: false,
          left: rect.left,
          top: rect.bottom + 4, // 4px gap below
          width: rect.width
        })
      }
    }
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

      // Show menu first
      setIsMenuVisible(true)

      // Update position immediately and after a short delay to ensure smooth transition
      requestAnimationFrame(() => {
        updateMenuPosition()
        // Update again after content is rendered
        setTimeout(() => {
          updateMenuPosition()
        }, 50)
      })

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
    [
      isMenuVisible,
      options,
      selectedId,
      triggerMenuUpdateLayout,
      updateMenuPosition,
      value
    ]
  )

  const handleFocus = useCallback(
    function (event: Event.onFocus<HTMLInputElement>) {
      onFocus(event)
      // Start with the current selected value in search
      const currentText = getSelectedOptionText()
      if (propSearchValue === undefined) {
        setInternalSearchValue(currentText)
      }
      onSearchValueInput(currentText)
      setIsSearching(true)
      event.currentTarget.select()

      // Always show menu on focus
      triggerMenuShow()
    },
    [
      onFocus,
      getSelectedOptionText,
      onSearchValueInput,
      propSearchValue,
      triggerMenuShow
    ]
  )

  // Update menu position when filtered options change
  useEffect(() => {
    if (isMenuVisible) {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        updateMenuPosition()
        // Update again after content is rendered
        setTimeout(() => {
          updateMenuPosition()
        }, 50)
      })
    }
  }, [isMenuVisible, filteredOptions, updateMenuPosition])

  const handleInput = useCallback(
    function (event: Event.onInput<HTMLInputElement>) {
      const newValue = event.currentTarget.value
      setIsSearching(true)

      if (propSearchValue === undefined) {
        setInternalSearchValue(newValue)
      }
      onSearchValueInput(newValue)

      // If input is completely cleared, clear selection
      if (newValue === EMPTY_STRING) {
        onValueChange(null)
        setSelectedId(INVALID_ID)
      }

      // Show menu when typing
      if (!isMenuVisible) {
        triggerMenuShow()
      }
    },
    [
      isMenuVisible,
      onSearchValueInput,
      onValueChange,
      propSearchValue,
      triggerMenuShow
    ]
  )

  const handleRootKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLDivElement>) {
      onKeyDown(event)
      const key = event.key

      if (key === 'Escape') {
        event.preventDefault()
        if (clearOnEscapeKeyDown === true) {
          event.stopPropagation()
          // Clear both search and selection
          if (propSearchValue === undefined) {
            setInternalSearchValue(EMPTY_STRING)
          }
          onSearchValueInput(EMPTY_STRING)
          onValueChange(null)
          setIsSearching(false)

          const inputElement = getCurrentFromRef(inputElementRef)
          if (inputElement) {
            inputElement.value = EMPTY_STRING
            inputElement.focus()
          }
          return
        }
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

      if (key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault()
        if (isMenuVisible === false) {
          triggerMenuShow()
          return
        }
        handleScrollableMenuKeyDown(event)
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
      clearOnEscapeKeyDown,
      handleScrollableMenuKeyDown,
      isMenuVisible,
      onKeyDown,
      onSearchValueInput,
      onValueChange,
      propSearchValue,
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
  }, [])

  const handleOptionChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>) {
      onChange(event)
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME)
      if (id === null) {
        throw new Error('`id` is `null`')
      }
      const optionValue = filteredOptions[
        parseInt(id, 10)
      ] as SearchDropdownOptionValue
      const newValue = optionValue.value
      onValueChange(newValue)

      // Clear the search state
      setIsSearching(false)
      if (propSearchValue === undefined) {
        setInternalSearchValue(EMPTY_STRING)
      }
      onSearchValueInput(EMPTY_STRING)

      // Don't hide menu after selection, just focus the input
      triggerRootFocus()
    },
    [
      filteredOptions,
      onChange,
      onValueChange,
      onSearchValueInput,
      propSearchValue,
      triggerRootFocus
    ]
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

  // Update menu position when the window resizes
  useEffect(() => {
    function handleWindowResize() {
      if (isMenuVisible) {
        updateMenuPosition()
      }
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [isMenuVisible, updateMenuPosition])

  useEffect(
    function () {
      function handleWindowScroll() {
        if (isMenuVisible === false) {
          return
        }
        updateMenuPosition()
      }
      window.addEventListener('scroll', handleWindowScroll)
      return function () {
        window.removeEventListener('scroll', handleWindowScroll)
      }
    },
    [isMenuVisible, updateMenuPosition]
  )

  // Effect to update menu position after it becomes visible
  useEffect(() => {
    if (isMenuVisible) {
      // Update position once menu is rendered
      setTimeout(() => {
        updateMenuPosition()
      }, 0)
    }
  }, [isMenuVisible, updateMenuPosition])

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
    [ref]
  )

  const inputRefCallback = useCallback(function (
    inputElement: null | HTMLInputElement
  ) {
    inputElementRef.current = inputElement
  }, [])

  return (
    <div
      {...rest}
      ref={refCallback}
      class={createClassName([
        styles.searchDropdown,
        disabled === true ? styles.disabled : null
      ])}
      onKeyDown={disabled === true ? undefined : handleRootKeyDown}
      onMouseDown={handleRootMouseDown}
      tabIndex={-1}
    >
      <div class={styles.inputContainer}>
        {typeof icon === 'undefined' ? (
          <div class={styles.searchIcon}>
            <IconSearch24 />
          </div>
        ) : (
          <div class={styles.icon}>{icon}</div>
        )}
        <input
          ref={inputRefCallback}
          class={styles.input}
          disabled={disabled === true}
          onFocus={handleFocus}
          onInput={handleInput}
          placeholder={placeholder}
          spellcheck={spellCheck}
          tabIndex={0}
          type="text"
          value={displayValue}
          {...inputProps}
        />
        {/* Render the clear button if either a value is selected or the user is searching */}
        {(searchValue !== EMPTY_STRING || value !== null) && !disabled ? (
          <button
            class={styles.clearButton}
            onClick={handleClearButtonClick}
            onMouseDown={(event) => {
              event.stopPropagation()
              event.preventDefault()
              // Immediately clear values
              if (propSearchValue === undefined) {
                setInternalSearchValue(EMPTY_STRING)
              }
              onSearchValueInput(EMPTY_STRING)
              onValueChange(null)
            }}
            tabIndex={0}
            type="button"
          >
            <div class={styles.clearButtonBox}>
              <IconClose24 />
            </div>
          </button>
        ) : null}
        {/* Only render the chevron if not searching and no value is selected */}
        {searchValue === EMPTY_STRING && value === null && (
          <div class={styles.chevronIcon}>
            <IconChevronDown16 />
          </div>
        )}
      </div>
      <div class={styles.valueDisplay}>
        {value === null ? (
          placeholder ? (
            <span>{placeholder}</span>
          ) : null
        ) : (
          <span>{children}</span>
        )}
      </div>
      {isMenuVisible &&
        createPortal(
          <div
            ref={menuContainerRef}
            className="menu-container"
            style={{
              left: `${menuPosition.left}px`,
              top: `${menuPosition.top}px`,
              width: `${menuPosition.width}px`
            }}
          >
            <div
              ref={menuElementRef}
              class={createClassName([
                menuStyles.menu,
                styles.menu,
                disabled === true ? menuStyles.hidden : null
              ])}
              onMouseDown={handleMenuMouseDown}
              style={{
                margin: 0,
                maxHeight: 'fit-content',
                overflowY: 'auto'
              }}
            >
              {filteredOptions.map(function (
                option: SearchDropdownOption,
                index: number
              ) {
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
                      option.disabled ? menuStyles.optionValueDisabled : null,
                      !option.disabled && `${index}` === selectedId
                        ? menuStyles.optionValueSelected
                        : null
                    ])}
                  >
                    <input
                      checked={value === option.value}
                      class={menuStyles.input}
                      disabled={option.disabled}
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
                        <IconCheck16 />
                      </div>
                    ) : null}
                    {typeof option.text === 'undefined'
                      ? option.value
                      : option.text}
                  </label>
                )
              })}
            </div>
          </div>,
          document.body
        )}
    </div>
  )
})

function getDropdownOptionValue(
  option: SearchDropdownOption
): ComponentChildren {
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
  options: Array<SearchDropdownOption>,
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
