import { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'

import { getCurrentFromRef } from '../../utilities/get-current-from-ref'

export function useMouseDownOutside(options: {
  ref: RefObject<HTMLElement>
  onMouseDownOutside: () => void
}): void {
  const { ref, onMouseDownOutside } = options
  useEffect(
    function (): () => void {
      function handleWindowMouseDown(event: MouseEvent): void {
        const element = getCurrentFromRef(ref)
        if (
          element === event.target ||
          element.contains(event.target as HTMLElement) // FIXME
        ) {
          return
        }
        onMouseDownOutside()
      }
      window.addEventListener('mousedown', handleWindowMouseDown)
      return function (): void {
        window.removeEventListener('mousedown', handleWindowMouseDown)
      }
    },
    [ref, onMouseDownOutside]
  )
}
