/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { cloneElement, h } from 'preact'
import { useCallback, useLayoutEffect, useRef, useState } from 'preact/hooks'
import { Option, OptionValue, isOptionHeader, isOptionSeparator } from '../../types'
import { useScrollableMenu } from '../../hooks/use-scrollable-menu'
import { checkIcon } from '../icon/icons/check-icon'
import { ESCAPE_KEY_CODE, ENTER_KEY_CODE } from '../../utilities/key-codes'
import styles from './dropdown-menu.scss'

const INVALID_ID = -1
const ITEM_ELEMENT_ATTRIBUTE_NAME = 'data-scrollable-menu-id'

export interface DropdownMenuProps {
  children: JSX.Element,
  focused?: boolean,
  fullWidth?: boolean,
  name: string,
  onChange: (state) => void, // FIXME
  options: Option[],
  right?: boolean,
  top?: boolean,
  value: string
}

export type DropdownOption = Option

export function DropdownMenu ({
  children,
  focused: isFocused,
  fullWidth: isFullWidth,
  name,
  onChange,
  options,
  right: isRight,
  top: isTop,
  value
} : DropdownMenuProps) {
  const rootElementRef = useRef(null)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const menuItems : Option[] = options.map(function (option, index) {
    return {
      id: index,
      ...option
    }
  })
  const committedId = getIdByValue(menuItems, value)
  const [selectedItemId, setSelectedItemId] = useState(committedId)
  const handleMenuItemClick = useCallback(
    function (event) {
      const index = parseInt(
        event.target.getAttribute(ITEM_ELEMENT_ATTRIBUTE_NAME)
      )
      onChange({ [name]: (options[index] as OptionValue).value })
      setIsMenuVisible(false)
    },
    [name, onChange, options, setIsMenuVisible]
  )
  const {
    menuElementRef,
    handleKeyDown,
    updateScrollPosition
  } = useScrollableMenu({
    itemElementAttributeName: ITEM_ELEMENT_ATTRIBUTE_NAME,
    selectedItemId,
    onChange: setSelectedItemId,
    changeOnMouseOver: true
  })
  const handleClick = useCallback(
    function (event) {
      if (
        menuElementRef.current === event.target ||
        menuElementRef.current.contains(event.target) === true
      ) {
        // Exit if we clicked the menu
        return
      }
      if (
        rootElementRef.current === event.target ||
        rootElementRef.current.contains(event.target) === true
      ) {
        setIsMenuVisible(!(isMenuVisible === true))
        updateScrollPosition(selectedItemId)
      }
    },
    [
      isMenuVisible,
      menuElementRef,
      selectedItemId,
      setIsMenuVisible,
      updateScrollPosition
    ]
  )
  const handleRootElementKeyDown = useCallback(
    // Commit the selected value and hide the menu if `Enter` was pressed
    function (event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        if (selectedItemId !== INVALID_ID) {
          setSelectedItemId(selectedItemId)
          onChange({ [name]: (options[selectedItemId] as OptionValue).value })
        }
        setIsMenuVisible(false)
        return
      }
      // Hide the menu if `Esc` was pressed
      if (event.keyCode === ESCAPE_KEY_CODE) {
        setIsMenuVisible(false)
        return
      }
      handleKeyDown(event)
    },
    [
      handleKeyDown,
      name,
      onChange,
      options,
      selectedItemId,
      setIsMenuVisible,
      setSelectedItemId
    ]
  )
  const handleWindowClick = useCallback(
    // Hide the menu if we’d clicked outside
    function (event) {
      if (
        isMenuVisible === false ||
        rootElementRef.current === event.target ||
        rootElementRef.current.contains(event.target)
      ) {
        return
      }
      setIsMenuVisible(false)
    },
    [rootElementRef, isMenuVisible, setIsMenuVisible]
  )
  useLayoutEffect(
    function () {
      window.addEventListener('click', handleWindowClick)
      return function () {
        window.removeEventListener('click', handleWindowClick)
      }
    },
    [handleWindowClick]
  )
  return (
    <div
      class={styles.dropdownMenu}
      onClick={handleClick}
      onKeyDown={handleRootElementKeyDown}
      tabIndex={0}
      ref={rootElementRef}
      data-initial-focus={isFocused === true}
    >
      {cloneElement(children, { [name]: value })}
      <div
        class={classnames(
          styles.menu,
          isMenuVisible === false ? styles.isHidden : null,
          isFullWidth === true ? styles.isFullWidth : null,
          isRight === true ? styles.isRight : null,
          isTop === true ? styles.isTop : null
        )}
        ref={menuElementRef}
      >
        {menuItems.map(function (menuItem) {
          if (isOptionSeparator(menuItem)) {
            return <hr class={styles.menuSeparator} key={menuItem.id} />
          }
          if (isOptionHeader(menuItem)) {
            return (
              <h1 class={styles.menuHeader} key={menuItem.id}>
                {menuItem.header}
              </h1>
            )
          }
          return (
            <div
              class={classnames(
                styles.menuItem,
                `${menuItem.id}` === selectedItemId
                  ? styles.menuItemSelected
                  : null
              )}
              onClick={handleMenuItemClick}
              key={menuItem.id}
              {...{ [ITEM_ELEMENT_ATTRIBUTE_NAME]: menuItem.id }}
            >
              {menuItem.id === committedId ? (
                <div class={styles.icon}>{checkIcon}</div>
              ) : null}
              {menuItem.value}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function getIdByValue (menuItems, targetValue) {
  if (targetValue !== null) {
    for (const { id, value } of menuItems) {
      if (value === targetValue) {
        return id
      }
    }
  }
  return INVALID_ID
}
