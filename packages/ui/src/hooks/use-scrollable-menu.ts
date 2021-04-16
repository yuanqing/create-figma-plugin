import type { RefObject } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import { DOWN_KEY_CODE, UP_KEY_CODE } from '../utilities/key-codes'

export const INVALID_MENU_ITEM_ID = null

export type MenuItemId = null | string

export function useScrollableMenu(options: {
  itemElementAttributeName: string
  selectedItemId: null | string
  onChange: (id: null | string) => void
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
    function (element: HTMLElement): null | string {
      return element.getAttribute(itemElementAttributeName)
    },
    [itemElementAttributeName]
  )
  const getItemElements = useCallback(
    function (): Array<HTMLElement> {
      const menuElement = menuElementRef.current
      if (menuElement === null || typeof menuElement === 'undefined') {
        return []
      }
      return Array.from(
        menuElement.querySelectorAll(`[${itemElementAttributeName}]`)
      )
    },
    [menuElementRef, itemElementAttributeName]
  )
  const getItemIndex = useCallback(
    function (id: null | string): number {
      if (id === INVALID_MENU_ITEM_ID) {
        return -1
      }
      return getItemElements().findIndex(function (element) {
        return parseItemElementId(element) === id
      })
    },
    [getItemElements, parseItemElementId]
  )
  const updateScrollPosition = useCallback(
    function (id: null | string): void {
      const itemElements = getItemElements()
      const index = getItemIndex(id)
      if (index === -1) {
        return
      }
      const selectedElement = itemElements[index] as HTMLElement
      const menuElement = menuElementRef.current
      if (menuElement === null || typeof menuElement === 'undefined') {
        return
      }
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
    function (event: KeyboardEvent): void {
      if (event.keyCode === DOWN_KEY_CODE || event.keyCode === UP_KEY_CODE) {
        const itemElements = getItemElements()
        const index = getItemIndex(selectedItemId)
        let newIndex
        if (event.keyCode === DOWN_KEY_CODE) {
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
    function (event: MouseEvent): void {
      const id = parseItemElementId(event.target as HTMLElement)
      if (id !== selectedItemId) {
        onChange(id)
      }
    },
    [onChange, parseItemElementId, selectedItemId]
  )
  useEffect(
    function (): void {
      const menuElement = menuElementRef.current
      if (menuElement === null || typeof menuElement === 'undefined') {
        return
      }
      menuElement.setAttribute('style', 'position: relative; overflow-y: auto')
    },
    [menuElementRef]
  )
  useEffect(
    function (): void | (() => void) {
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
