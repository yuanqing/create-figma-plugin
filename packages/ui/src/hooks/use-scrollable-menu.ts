import { JSX, RefObject } from 'preact'
import { useCallback } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref.js'

export function useScrollableMenu(options: {
  itemIdDataAttributeName: string
  menuElementRef: RefObject<HTMLDivElement>
  selectedId: null | string
  setSelectedId: (selectedId: string) => void
}): {
  handleScrollableMenuKeyDown: (
    event: JSX.TargetedKeyboardEvent<HTMLElement>
  ) => void
  handleScrollableMenuItemMouseMove: (
    event: JSX.TargetedMouseEvent<HTMLElement>
  ) => void
} {
  const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } =
    options

  const getItemElements = useCallback(
    function (): Array<HTMLElement> {
      return Array.from(
        getCurrentFromRef(menuElementRef).querySelectorAll<HTMLElement>(
          `[${itemIdDataAttributeName}]`
        )
      ).filter(function (element: HTMLElement): boolean {
        return element.hasAttribute('disabled') === false
      })
    },
    [itemIdDataAttributeName, menuElementRef]
  )

  const findIndexByItemId = useCallback(
    function (id: null | string): number {
      if (id === null) {
        return -1
      }
      const index = getItemElements().findIndex(function (
        element: HTMLElement
      ): boolean {
        return (element.getAttribute(itemIdDataAttributeName) as string) === id
      })
      if (index === -1) {
        throw new Error('Invariant violation') // `id` is valid
      }
      return index
    },
    [getItemElements, itemIdDataAttributeName]
  )

  const updateScrollPosition = useCallback(
    function (id: string): void {
      const itemElements = getItemElements()
      const index = findIndexByItemId(id)
      const selectedElement = itemElements[index]
      const selectedElementOffsetTop =
        selectedElement.getBoundingClientRect().top
      const menuElement = getCurrentFromRef(menuElementRef)
      const menuElementOffsetTop = menuElement.getBoundingClientRect().top
      if (selectedElementOffsetTop < menuElementOffsetTop) {
        selectedElement.scrollIntoView()
        return
      }
      const offsetBottom =
        selectedElementOffsetTop + selectedElement.offsetHeight
      if (offsetBottom > menuElementOffsetTop + menuElement.offsetHeight) {
        selectedElement.scrollIntoView()
      }
    },
    [findIndexByItemId, getItemElements, menuElementRef]
  )

  const handleScrollableMenuKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLElement>): void {
      const key = event.key
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        const itemElements = getItemElements()
        const index = findIndexByItemId(selectedId)
        let newIndex
        if (key === 'ArrowDown') {
          newIndex =
            index === -1 || index === itemElements.length - 1 ? 0 : index + 1
        } else {
          newIndex =
            index === -1 || index === 0 ? itemElements.length - 1 : index - 1
        }
        const selectedElement = itemElements[newIndex]
        const newSelectedId = selectedElement.getAttribute(
          itemIdDataAttributeName
        ) as string
        setSelectedId(newSelectedId)
        updateScrollPosition(newSelectedId)
      }
    },
    [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]
  )

  const handleScrollableMenuItemMouseMove = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLElement>): void {
      const id = event.currentTarget.getAttribute(
        itemIdDataAttributeName
      ) as string
      if (id !== selectedId) {
        setSelectedId(id)
      }
    },
    [itemIdDataAttributeName, selectedId, setSelectedId]
  )

  return {
    handleScrollableMenuItemMouseMove,
    handleScrollableMenuKeyDown
  }
}
