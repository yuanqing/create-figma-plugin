import { useEffect } from 'preact/hooks'

const INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = 'data-initial-focus'

export function useInitialFocus(): Record<string, true> {
  useEffect(function () {
    const focusableElement = document.querySelector(
      `[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]`
    )
    if (focusableElement === null) {
      throw new Error(
        `No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``
      )
    }
    ;(focusableElement as HTMLElement).focus()
  }, [])
  return {
    [`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}`]: true
  }
}
