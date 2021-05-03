import { RefObject } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-scrollable-menu-item-id'

export function useScrollableMenu(options: {
  selectedItemId: null | string
  onItemIdChange: (id: string) => void
  changeOnMouseOver: boolean
}): {
  menuElementRef: RefObject<HTMLDivElement>
  itemIdDataAttributeName: typeof ITEM_ID_DATA_ATTRIBUTE_NAME
  handleScrollableMenuKeyDown: (event: KeyboardEvent) => void
} {
  const { selectedItemId, onItemIdChange, changeOnMouseOver = true } = options

  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)

  const getItemElements = useCallback(
    function (): Array<HTMLElement> {
      return Array.from(
        getCurrentFromRef(menuElementRef).querySelectorAll<HTMLElement>(
          `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]`
        )
      )
    },
    [menuElementRef]
  )

  const getItemIndex = useCallback(
    function (id: null | string): number {
      if (id === null) {
        return -1
      }
      const index = getItemElements().findIndex(function (element) {
        return getMenuItemId(element) === id
      })
      if (index === -1) {
        throw new Error('Invariant violation') // `id` is valid
      }
      return index
    },
    [getItemElements]
  )

  const updateScrollPosition = useCallback(
    function (id: string): void {
      const itemElements = getItemElements()
      const index = getItemIndex(id)
      const selectedElement = itemElements[index]
      const menuElement = getCurrentFromRef(menuElementRef)
      const y =
        selectedElement.getBoundingClientRect().y -
        menuElement.getBoundingClientRect().y
      if (y < menuElement.scrollTop) {
        // Selected element is above the visible items at the current scroll position
        menuElement.scrollTop = y
        return
      }
      const offsetBottom = y + selectedElement.offsetHeight
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
    [onItemIdChange, selectedItemId]
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
    handleScrollableMenuKeyDown: handleKeyDown,
    itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
    menuElementRef
  }
}

function getMenuItemId(element: HTMLElement): string {
  const id = element.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME)
  if (id === null) {
    throw new Error(
      `Element with no attribute \`${ITEM_ID_DATA_ATTRIBUTE_NAME}\``
    )
  }
  return id
}
