import {
  INVALID_ID,
  ITEM_ID_DATA_ATTRIBUTE_NAME,
  VIEWPORT_MARGIN
} from './constants'
import { Id } from './types'

export function updateMenuElementLayout(
  rootElement: HTMLDivElement,
  menuElement: HTMLDivElement,
  selectedId: Id
) {
  const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN
  const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN
  menuElement.style.maxWidth = `${menuElementMaxWidth}px`
  menuElement.style.maxHeight = `${menuElementMaxHeight}px`

  const selectedLabelElement = getSelectedLabelElement(menuElement, selectedId)
  const rootElementBoundingClientRect = rootElement.getBoundingClientRect()
  const isScrollable = menuElement.offsetHeight === menuElementMaxHeight

  const left = computeMenuElementLeft({
    menuWidth: menuElement.offsetWidth,
    rootLeft: rootElementBoundingClientRect.left
  })
  const top = computeMenuElementTop({
    isScrollable,
    menuHeight: menuElement.offsetHeight,
    rootHeight: rootElement.offsetHeight,
    rootTop: rootElementBoundingClientRect.top,
    selectedTop:
      selectedLabelElement === null ? null : selectedLabelElement.offsetTop
  })
  menuElement.style.left = `${left}px`
  menuElement.style.top = `${top}px`

  if (selectedLabelElement !== null && isScrollable === true) {
    menuElement.scrollTop = computeMenuElementScrollTop({
      menuHeight: menuElement.offsetHeight,
      menuScrollHeight: menuElement.scrollHeight,
      menuTop: menuElement.getBoundingClientRect().top,
      rootHeight: rootElement.offsetHeight,
      rootTop: rootElementBoundingClientRect.top,
      selectedHeight: selectedLabelElement.offsetHeight,
      selectedTop: selectedLabelElement.offsetTop
    })
  }
}

function getSelectedLabelElement(
  menuElement: HTMLDivElement,
  selectedId: Id
): null | HTMLLabelElement {
  if (selectedId === INVALID_ID) {
    return null
  }
  const selectedInputElement = menuElement.querySelector<HTMLInputElement>(
    `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
  )
  if (selectedInputElement === null) {
    throw new Error('Invariant violation')
  }
  const selectedLabelElement = selectedInputElement.parentElement
  if (selectedLabelElement === null) {
    throw new Error('Invariant violation')
  }
  return selectedLabelElement as HTMLLabelElement
}

function computeMenuElementLeft(options: {
  menuWidth: number
  rootLeft: number
}): number {
  const { rootLeft, menuWidth } = options
  if (rootLeft <= VIEWPORT_MARGIN) {
    return negate(rootLeft) + VIEWPORT_MARGIN
  }
  const left = negate(
    rootLeft + menuWidth - (window.innerWidth - VIEWPORT_MARGIN)
  )
  return Math.min(left, 0)
}

function computeMenuElementTop(options: {
  isScrollable: boolean
  menuHeight: number
  rootHeight: number
  rootTop: number
  selectedTop: null | number
}): number {
  const viewportHeight = window.innerHeight
  const { isScrollable, menuHeight, rootHeight, rootTop, selectedTop } = options
  if (rootTop <= VIEWPORT_MARGIN) {
    return negate(rootTop) + VIEWPORT_MARGIN
  }
  if (rootTop + rootHeight >= viewportHeight - VIEWPORT_MARGIN) {
    return negate(rootTop - (viewportHeight - VIEWPORT_MARGIN - menuHeight))
  }

  const minimumTop = negate(rootTop - VIEWPORT_MARGIN)
  const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight - rootTop

  if (selectedTop === null || isScrollable === true) {
    // Return the `top` position of `menuElement` such that `menuElement` fits
    // within the viewport height
    const top = Math.min(negate((menuHeight - rootHeight) / 2), 0)
    return restrictToRange(top, minimumTop, maximumTop)
  }

  // Return the `top` position of `menuElement` such that `selectedElement` is
  // directly above the `rootElement`
  return restrictToRange(negate(selectedTop), minimumTop, maximumTop)
}

function computeMenuElementScrollTop(options: {
  menuHeight: number
  menuScrollHeight: number
  menuTop: number
  rootHeight: number
  rootTop: number
  selectedHeight: number
  selectedTop: number
}): number {
  const viewportHeight = window.innerHeight
  const {
    menuHeight,
    menuScrollHeight,
    menuTop,
    rootHeight,
    rootTop,
    selectedTop,
    selectedHeight
  } = options
  const minimumScrollTop = 0
  const maximumScrollTop = menuScrollHeight - menuHeight
  if (rootTop <= menuTop) {
    return restrictToRange(selectedTop, minimumScrollTop, maximumScrollTop)
  }
  if (rootTop + rootHeight >= viewportHeight - VIEWPORT_MARGIN) {
    return restrictToRange(
      selectedTop + selectedHeight - menuHeight,
      minimumScrollTop,
      maximumScrollTop
    )
  }
  return restrictToRange(
    selectedTop - rootTop + menuTop,
    minimumScrollTop,
    maximumScrollTop
  )
}

function negate(number: number): number {
  return -1 * number
}

function restrictToRange(
  number: number,
  minimum: number,
  maximum: number
): number {
  return Math.min(Math.max(number, minimum), maximum)
}
