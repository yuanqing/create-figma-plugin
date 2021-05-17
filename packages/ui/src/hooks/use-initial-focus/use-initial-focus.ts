import { useEffect } from 'preact/hooks'

const INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = 'data-initial-focus'

export type InitialFocus = {
  [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
}

export function useInitialFocus(): InitialFocus {
  useEffect(function (): void {
    const focusableElements = document.querySelectorAll<HTMLElement>(
      `[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]`
    )
    if (focusableElements.length === 0) {
      throw new Error(
        `No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``
      )
    }
    if (focusableElements.length > 1) {
      // Find and focus the first `checked` radio button `input` element
      const checkedRadioButtonInputElement = Array.prototype.slice
        .call(focusableElements)
        .find(function (focusableElement: HTMLElement) {
          const inputElement = focusableElement as HTMLInputElement
          return inputElement.type === 'radio' && inputElement.checked === true
        })
      if (typeof checkedRadioButtonInputElement !== 'undefined') {
        checkedRadioButtonInputElement.focus()
        return
      }
    }
    focusableElements[0].focus()
  }, [])
  return {
    [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
  }
}
