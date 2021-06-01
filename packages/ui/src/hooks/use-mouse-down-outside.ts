import { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref'

export function useMouseDownOutside(options: {
  ref: RefObject<HTMLElement>
  onMouseDownOutside: () => void
}): void {
  const { ref, onMouseDownOutside } = options
  useEffect(
    function (): () => void {
      function handleBlur() {
        // This is triggered when clicking outside the plugin `iframe`
        onMouseDownOutside()
      }
      function handleMouseDown(event: MouseEvent): void {
        const element = getCurrentFromRef(ref)
        if (
          element === event.target ||
          element.contains(event.target as HTMLElement) // FIXME
        ) {
          return
        }
        onMouseDownOutside()
      }
      window.addEventListener('blur', handleBlur)
      window.addEventListener('mousedown', handleMouseDown)
      return function (): void {
        window.removeEventListener('blur', handleBlur)
        window.removeEventListener('mousedown', handleMouseDown)
      }
    },
    [ref, onMouseDownOutside]
  )
}
