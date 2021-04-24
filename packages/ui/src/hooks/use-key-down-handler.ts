import { useCallback, useEffect } from 'preact/hooks'

export function useKeyDownHandler(
  key: KeyboardEvent['key'],
  onKeyDown: (event: KeyboardEvent) => void
): void {
  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      if (event.key !== key) {
        return
      }
      onKeyDown(event)
    },
    [key, onKeyDown]
  )

  useEffect(
    function () {
      window.addEventListener('keydown', handleKeyDown)
      return function () {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown]
  )
}
