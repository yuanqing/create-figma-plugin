import { useCallback, useEffect, useRef } from 'preact/hooks'
import { DOWN_KEY_CODE, UP_KEY_CODE } from '../utilities/key-codes'

const INVALID_ITEM_ID = -1

export function useScrollableMenu ({
  itemElementAttributeName,
  selectedItemId,
  onChange,
  changeOnMouseOver = true
}) {
  const menuElementRef = useRef(null)
  const parseItemElementId = useCallback(
    function (element) {
      return parseInt(element.getAttribute(itemElementAttributeName))
    },
    [itemElementAttributeName]
  )
  const getItemElements = useCallback(
    function () {
      const menuElement = menuElementRef.current
      if (menuElement === null) {
        return []
      }
      return Array.from(
        menuElement.querySelectorAll(`[${itemElementAttributeName}]`)
      )
    },
    [menuElementRef, itemElementAttributeName]
  )
  const getItemIndex = useCallback(
    function (id) {
      if (id === INVALID_ITEM_ID) {
        return -1
      }
      return getItemElements().findIndex(function (element) {
        return parseItemElementId(element) === id
      })
    },
    [getItemElements, parseItemElementId]
  )
  const updateScrollPosition = useCallback(
    function (id) {
      const itemElements = getItemElements()
      const index = getItemIndex(id)
      if (index === -1) {
        return
      }
      const selectedElement = itemElements[index]
      const menuElement = menuElementRef.current
      if (selectedElement.offsetTop < menuElement.scrollTop) {
        // Selected element is above the visible items at the current scroll position
        menuElement.scrollTop = selectedElement.offsetTop
        return
      }
      const offsetBottom =
        selectedElement.offsetTop + selectedElement.offsetHeight
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        // Selected element is below the visible items at the current scroll position
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight
      }
    },
    [getItemElements, getItemIndex, menuElementRef]
  )
  const handleKeyDown = useCallback(
    function (event) {
      if (event.keyCode === DOWN_KEY_CODE || event.keyCode === UP_KEY_CODE) {
        const itemElements = getItemElements()
        const index = getItemIndex(selectedItemId)
        let newIndex
        if (event.keyCode === DOWN_KEY_CODE) {
          newIndex =
            index === INVALID_ITEM_ID || index === itemElements.length - 1
              ? 0
              : index + 1
        } else {
          newIndex =
            index === INVALID_ITEM_ID || index === 0
              ? itemElements.length - 1
              : index - 1
        }
        const selectedElement = itemElements[newIndex]
        const id = parseItemElementId(selectedElement)
        onChange(id)
        updateScrollPosition(id)
      }
    },
    [
      getItemElements,
      getItemIndex,
      onChange,
      parseItemElementId,
      selectedItemId,
      updateScrollPosition
    ]
  )
  const handleMouseMove = useCallback(
    function (event) {
      const selectedItemId = parseItemElementId(event.target)
      onChange(selectedItemId)
    },
    [onChange, parseItemElementId]
  )
  useEffect(
    function () {
      if (changeOnMouseOver === false) {
        return
      }
      const itemElements = getItemElements()
      if (itemElements.length === 0) {
        return
      }
      for (const element of itemElements) {
        element.addEventListener('mousemove', handleMouseMove)
      }
      return function () {
        for (const element of itemElements) {
          element.removeEventListener('mousemove', handleMouseMove)
        }
      }
    },
    [changeOnMouseOver, getItemElements, handleMouseMove]
  )
  return { menuElementRef, handleKeyDown, updateScrollPosition }
}
