import { useKeyDownHandler } from './use-key-down-handler'

export function useFocusTrap(): void {
  useKeyDownHandler('Tab', function (event: KeyboardEvent) {
    const focusableElements = getFocusableElements()
    const index = findElementIndex(
      event.target as HTMLElement, // FIXME
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
  })
}

function getFocusableElements(): Array<HTMLElement> {
  const elements = document.querySelectorAll(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
}

function findElementIndex(
  targetElement: HTMLElement,
  elements: Array<HTMLElement>
): number {
  return elements.reduce(function (result, element, index) {
    if (result === -1 && element.isEqualNode(targetElement)) {
      return index
    }
    return result
  }, -1)
}
