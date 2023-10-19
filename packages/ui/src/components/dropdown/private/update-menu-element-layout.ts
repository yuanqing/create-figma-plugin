import {
  INVALID_ID,
  ITEM_ID_DATA_ATTRIBUTE_NAME,
  VIEWPORT_MARGIN
} from '../../../utilities/private/constants.js'
import { Id } from './types.js'

export function updateMenuElementLayout(
  rootElement: HTMLDivElement,
  menuElement: HTMLDivElement,
  selectedId: Id
) {
  const rootElementBoundingClientRect = rootElement.getBoundingClientRect()
  const rootWidth = rootElement.offsetWidth
  const rootHeight = rootElement.offsetHeight
  const rootLeft = rootElementBoundingClientRect.left
  const rootTop = rootElementBoundingClientRect.top

  menuElement.style.minWidth = `${rootWidth}px`

  const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN
  menuElement.style.maxWidth = `${menuElementMaxWidth}px`

  const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN
  menuElement.style.maxHeight = `${menuElementMaxHeight}px`

  const menuWidth = menuElement.offsetWidth
  const menuHeight = menuElement.offsetHeight
  const menuScrollHeight = menuElement.scrollHeight
  const menuPaddingTop = parseInt(
    window.getComputedStyle(menuElement).paddingTop,
    10
  )
  const labelElement = getSelectedLabelElement(menuElement, selectedId)

  const left = computeLeft({
    menuWidth,
    rootLeft
  })
  menuElement.style.left = `${left}px`

  const top = computeTop({
    menuHeight,
    rootTop,
    selectedTop: labelElement.offsetTop
  })
  menuElement.style.top = `${top}px`

  const isScrollable = menuScrollHeight > menuHeight
  if (isScrollable === false) {
    return
  }
  menuElement.scrollTop = computeScrollTop({
    menuHeight,
    menuPaddingTop,
    menuScrollHeight,
    rootHeight,
    rootTop,
    selectedTop: labelElement.offsetTop
  })
}

function getSelectedLabelElement(
  menuElement: HTMLDivElement,
  selectedId: Id
): HTMLLabelElement {
  const inputElement = menuElement.querySelector<HTMLInputElement>(
    selectedId === INVALID_ID
      ? `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]`
      : `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
  )
  if (inputElement === null) {
    throw new Error('`inputElement` is `null`')
  }
  const labelElement = inputElement.parentElement
  if (labelElement === null) {
    throw new Error('`labelElement` is `null`')
  }
  return labelElement as HTMLLabelElement
}

function computeLeft(options: { menuWidth: number; rootLeft: number }): number {
  const { menuWidth, rootLeft } = options
  if (rootLeft <= VIEWPORT_MARGIN) {
    return VIEWPORT_MARGIN
  }
  const viewportWidth = window.innerWidth
  if (rootLeft + menuWidth > viewportWidth - VIEWPORT_MARGIN) {
    return viewportWidth - VIEWPORT_MARGIN - menuWidth
  }
  return rootLeft
}

function computeTop(options: {
  menuHeight: number
  rootTop: number
  selectedTop: number
}): number {
  const { menuHeight, rootTop, selectedTop } = options
  const viewportHeight = window.innerHeight
  if (
    rootTop <= VIEWPORT_MARGIN ||
    menuHeight === viewportHeight - 2 * VIEWPORT_MARGIN
  ) {
    return VIEWPORT_MARGIN
  }
  // Position the selected element at `rootTop`
  const top = rootTop - selectedTop
  const minimumTop = VIEWPORT_MARGIN
  const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight
  return restrictToRange(top, minimumTop, maximumTop)
}

function computeScrollTop(options: {
  menuHeight: number
  menuPaddingTop: number
  menuScrollHeight: number
  rootHeight: number
  rootTop: number
  selectedTop: number
}): number {
  const {
    menuHeight,
    menuPaddingTop,
    menuScrollHeight,
    rootHeight,
    rootTop,
    selectedTop
  } = options
  const restrictedRootTop = restrictToRange(
    rootTop,
    VIEWPORT_MARGIN,
    window.innerHeight - VIEWPORT_MARGIN - rootHeight + menuPaddingTop / 2
  )
  const scrollTop = selectedTop - (restrictedRootTop - VIEWPORT_MARGIN)
  const minimumScrollTop = 0
  const maximumScrollTop = menuScrollHeight - menuHeight
  return restrictToRange(scrollTop, minimumScrollTop, maximumScrollTop)
}

function restrictToRange(
  number: number,
  minimum: number,
  maximum: number
): number {
  return Math.min(Math.max(number, minimum), maximum)
}
