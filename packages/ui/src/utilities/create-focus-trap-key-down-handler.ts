export function createFocusTrapKeyDownHandler(rootElement?: HTMLElement) {
  return function (event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return
    }
    const focusableElements = getFocusableElements(rootElement)
    if (focusableElements.length === 0) {
      event.preventDefault()
      return
    }
    const index = findElementIndex(
      event.target as HTMLElement,
      focusableElements
    )
    if (index === focusableElements.length - 1 && event.shiftKey === false) {
      // Focus the first element
      event.preventDefault()
      focusableElements[0].focus()
      return
    }
    if (index === 0 && event.shiftKey === true) {
      // Focus the last element
      event.preventDefault()
      focusableElements[focusableElements.length - 1].focus()
    }
  }
}

function findElementIndex(
  targetElement: HTMLElement,
  elements: Array<HTMLElement>
): number {
  return elements.reduce(function (
    result: number,
    element: HTMLElement,
    index: number
  ): number {
    if (result === -1 && element.isSameNode(targetElement) === true) {
      return index
    }
    return result
  },
  -1)
}

function getFocusableElements(rootElement?: HTMLElement): Array<HTMLElement> {
  const elements = (
    typeof rootElement === 'undefined' ? document : rootElement
  ).querySelectorAll<HTMLElement>(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
}
