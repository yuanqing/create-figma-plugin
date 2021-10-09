import { getFocusableElements } from './get-focusable-elements'

export function createFocusTrapKeyDownHandler(rootElement?: HTMLElement) {
  return function (event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return
    }
    event.preventDefault()
    const focusableElements = getFocusableElements(rootElement)
    if (focusableElements.length === 0) {
      return
    }
    const index = findElementIndex(
      event.target as HTMLElement,
      focusableElements
    )
    if (index === focusableElements.length - 1 && event.shiftKey === false) {
      // Focus the first element
      focusableElements[0].focus()
      return
    }
    if (index === 0 && event.shiftKey === true) {
      // Focus the last element
      focusableElements[focusableElements.length - 1].focus()
      return
    }
    focusableElements[event.shiftKey === true ? index - 1 : index + 1].focus()
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
