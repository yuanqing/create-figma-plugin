import { useEffect } from 'preact/hooks'

import { createFocusTrapKeyDownHandler } from '../../utilities/create-focus-trap-key-down-handler'

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
