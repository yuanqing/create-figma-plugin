export function getFocusableElements(
  rootElement?: HTMLElement
): Array<HTMLElement> {
  const elements = (
    typeof rootElement === 'undefined' ? document : rootElement
  ).querySelectorAll<HTMLElement>(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
}
