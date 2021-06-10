import { useWindowKeyDown } from '../use-window-key-down'

export function useFocusTrap(): void {
  useWindowKeyDown('Tab', function (event: KeyboardEvent): void {
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
  const elements = document.querySelectorAll<HTMLElement>(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
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
