import type { RefObject } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref'

type ItemId = typeof INVALID_ITEM_ID | string

const INVALID_ITEM_ID = null

export function useScrollableMenu(options: {
  itemElementAttributeName: string
  selectedItemId: ItemId
  onChange: (id: ItemId) => void
  changeOnMouseOver: boolean
}) {
  const {
    itemElementAttributeName,
    selectedItemId,
    onChange,
    changeOnMouseOver = true
  } = options
  const menuElementRef: RefObject<HTMLElement> = useRef(null)

  const parseItemElementId = useCallback(
    function (element: HTMLElement): ItemId {
      return element.getAttribute(itemElementAttributeName)
    },
    [itemElementAttributeName]
  )

  const getItemElements = useCallback(
    function (): Array<HTMLElement> {
      return Array.from(
        getCurrentFromRef(menuElementRef).querySelectorAll(
          `[${itemElementAttributeName}]`
        )
      )
    },
    [menuElementRef, itemElementAttributeName]
  )

  const getItemIndex = useCallback(
    function (id: ItemId): number {
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
    function (id: ItemId) {
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
    function (event: MouseEvent) {
      const id = parseItemElementId(event.target as HTMLElement)
      if (id !== selectedItemId) {
        onChange(id)
      }
    },
    [onChange, parseItemElementId, selectedItemId]
  )

  useEffect(
    function () {
      getCurrentFromRef(menuElementRef).setAttribute(
        'style',
        'position: relative; overflow-y: auto'
      )
    },
    [menuElementRef]
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

  return { handleKeyDown, menuElementRef, updateScrollPosition }
}
