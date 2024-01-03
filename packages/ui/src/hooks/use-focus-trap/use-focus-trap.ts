import { createFocusTrapKeyDownHandler } from '../../utilities/private/create-focus-trap-key-down-handler.js'
import { useEffect } from 'react'

export function useFocusTrap(rootElement?: HTMLElement): void {
  useEffect(
    function () {
      const handleKeyDown = createFocusTrapKeyDownHandler(rootElement)
      window.addEventListener('keydown', handleKeyDown)
      return function (): void {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [rootElement]
  )
}
