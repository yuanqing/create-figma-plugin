import { useCallback, useEffect } from 'preact/hooks'

export function useWindowKeyDown(
  key: KeyboardEvent['key'],
  onKeyDown: (event: KeyboardEvent) => void
): void {
  const handleKeyDown = useCallback(
    function (event: KeyboardEvent): void {
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
      return function (): void {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown]
  )
}
