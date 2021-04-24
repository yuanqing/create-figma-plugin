import { useEffect } from 'preact/hooks'

const INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = 'data-initial-focus'

export function useInitialFocus(
  initialFocusDataAttributeName = INITIAL_FOCUS_DATA_ATTRIBUTE_NAME
): Record<string, true> {
  useEffect(
    function () {
      const focusableElement = document.querySelector(
        `[${initialFocusDataAttributeName}]`
      )
      if (focusableElement === null) {
        throw new Error(
          `No element with attribute \`${initialFocusDataAttributeName}\``
        )
      }
      ;(focusableElement as HTMLElement).focus()
    },
    [initialFocusDataAttributeName]
  )
  return {
    [`${initialFocusDataAttributeName}`]: true
  }
}
