import { useEffect } from 'preact/hooks'

const INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = 'data-initial-focus'

export type InitialFocus = {
  [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
}

export function useInitialFocus(): InitialFocus {
  useEffect(function () {
    const focusableElement = document.querySelector<HTMLElement>(
      `[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]`
    )
    if (focusableElement === null) {
      throw new Error(
        `No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``
      )
    }
    focusableElement.focus()
  }, [])
  return {
    [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
  }
}
