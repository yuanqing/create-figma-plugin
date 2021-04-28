import { RefObject } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref'

const INVALID_ITEM_ID = null
const SCROLLABLE_MENU_ITEM_DATA_ATTRIBUTE_NAME = 'data-scrollable-menu-item-id'

export function useScrollableMenu(options: {
  scrollableMenuItemDataAttributeName?: string
  selectedItemId: null | string
  onItemIdChange: (id: null | string) => void
  changeOnMouseOver: boolean
}): {
  menuElementRef: RefObject<HTMLDivElement>
  scrollableMenuItemIdDataAttributeName: typeof SCROLLABLE_MENU_ITEM_DATA_ATTRIBUTE_NAME
} {
  const { selectedItemId, onItemIdChange, changeOnMouseOver = true } = options

  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)

  const getMenuItemId = useCallback(function (
    element: HTMLElement
  ): null | string {
    return element.getAttribute(SCROLLABLE_MENU_ITEM_DATA_ATTRIBUTE_NAME)
  },
  [])

  const getItemElements = useCallback(
    function (): Array<HTMLElement> {
      return Array.from(
        getCurrentFromRef(menuElementRef).querySelectorAll(
          `[${SCROLLABLE_MENU_ITEM_DATA_ATTRIBUTE_NAME}]`
        )
      )
    },
    [menuElementRef]
  )

  const getItemIndex = useCallback(
    function (id: null | string): number {
      if (id === INVALID_ITEM_ID) {
        return -1
      }
      return getItemElements().findIndex(function (element) {
        return getMenuItemId(element) === id
      })
    },
    [getItemElements, getMenuItemId]
  )

  const updateScrollPosition = useCallback(
    function (id: null | string) {
      const itemElements = getItemElements()
      const index = getItemIndex(id)
      if (index === -1) {
        return
      }
      const selectedElement = itemElements[index]
      const menuElement = getCurrentFromRef(menuElementRef)
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
    function (event: KeyboardEvent) {
      const key = event.key
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        const itemElements = getItemElements()
        const index = getItemIndex(selectedItemId)
        let newIndex
        if (key === 'ArrowDown') {
          newIndex =
            index === -1 || index === itemElements.length - 1 ? 0 : index + 1
        } else {
          newIndex =
            index === -1 || index === 0 ? itemElements.length - 1 : index - 1
        }
        const selectedElement = itemElements[newIndex]
        const id = getMenuItemId(selectedElement)
        onItemIdChange(id)
        updateScrollPosition(id)
      }
    },
    [
      getItemElements,
      getItemIndex,
      onItemIdChange,
      getMenuItemId,
      selectedItemId,
      updateScrollPosition
    ]
  )

  const handleMouseMove = useCallback(
    function (event: MouseEvent) {
      const id = getMenuItemId(event.target as HTMLElement) // FIXME
      if (id !== selectedItemId) {
        onItemIdChange(id)
      }
    },
    [onItemIdChange, getMenuItemId, selectedItemId]
  )

  useEffect(
    function () {
      window.addEventListener('keydown', handleKeyDown)
      return function () {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown]
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

  return {
    menuElementRef,
    scrollableMenuItemIdDataAttributeName: SCROLLABLE_MENU_ITEM_DATA_ATTRIBUTE_NAME
  }
}
