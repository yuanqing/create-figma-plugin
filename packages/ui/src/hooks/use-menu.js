import { useCallback, useLayoutEffect, useRef } from 'preact/hooks'
import { DOWN_KEY_CODE, UP_KEY_CODE } from '../utilities/key-codes'

export function useMenu ({
  getSelectedItemElement,
  onChange,
  items,
  selectedItem
}) {
  const handleKeyDown = useCallback(
    function (event) {
      if (event.keyCode === UP_KEY_CODE || event.keyCode === DOWN_KEY_CODE) {
        event.preventDefault()
        if (selectedItem === null) {
          if (event.keyCode === UP_KEY_CODE) {
            onChange(items[items.length - 1])
            return
          }
          onChange(items[0])
          return
        }
        const currentIndex = items.findIndex(function (item) {
          return item === selectedItem
        })
        let nextIndex = currentIndex + (event.keyCode === UP_KEY_CODE ? -1 : 1)
        if (nextIndex === -1) {
          nextIndex = items.length - 1
        }
        if (nextIndex === items.length) {
          nextIndex = 0
        }
        onChange(items[nextIndex])
      }
    },
    [onChange, items, selectedItem]
  )
  const menuElementRef = useRef(null)
  useLayoutEffect(
    function () {
      const menuElement = menuElementRef.current
      if (menuElement === null || items.length === 0) {
        return
      }
      menuElement.setAttribute('style', 'position: relative; overflow: auto')
      if (selectedItem === null) {
        menuElement.scrollTop = 0
        return
      }
      const selectedItemElement = getSelectedItemElement(
        menuElement,
        selectedItem
      )
      if (selectedItemElement === null) {
        menuElement.scrollTop = 0
        return
      }
      if (selectedItemElement.offsetTop < menuElement.scrollTop) {
        menuElement.scrollTop = selectedItemElement.offsetTop
        return
      }
      const offsetBottom =
        selectedItemElement.offsetTop + selectedItemElement.offsetHeight
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight
      }
    },
    [onChange, items, selectedItem]
  )
  return { handleKeyDown, menuElementRef }
}
