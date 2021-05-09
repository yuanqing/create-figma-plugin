import { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'

import { getCurrentFromRef } from '../utilities/get-current-from-ref.js'

export function useClickOutside(options: {
  ref: RefObject<HTMLElement>
  onClickOutside: () => void
}): void {
  const { ref, onClickOutside } = options
  useEffect(
    function (): () => void {
      function handleWindowClick(event: MouseEvent): void {
        const element = getCurrentFromRef(ref)
        if (
          element === event.target ||
          element.contains(event.target as HTMLElement) // FIXME
        ) {
          return
        }
        onClickOutside()
      }
      window.addEventListener('click', handleWindowClick)
      return function (): void {
        window.removeEventListener('click', handleWindowClick)
      }
    },
    [ref, onClickOutside]
  )
}
