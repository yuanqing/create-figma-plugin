import { useCallback, useEffect, useState } from 'preact/hooks'
import {
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE
} from '../utilities/key-codes'

type State = { [key: string]: any }

export function useForm (
  initialState,
  options: {
    transform?: (state: State) => State
    validate?: (state: State) => boolean
    onSubmit?: (state: State, event: Event) => void
    onClose?: (state: State, event: Event) => void
  }
) {
  const { transform, validate, onSubmit, onClose } = options
  const [state, setState] = useState(
    typeof transform === 'function' ? transform(initialState) : initialState
  )
  const handleChange = useCallback(
    function (nextState: State): void {
      setState(function (previousState: State) {
        const state = {
          ...previousState,
          ...nextState
        }
        return typeof transform === 'function' ? transform(state) : state
      })
    },
    [transform, setState]
  )
  const handleKeyDown = useCallback(
    function (event?: KeyboardEvent): void {
      if (typeof event === 'undefined') {
        return
      }
      switch (event.keyCode) {
        case ESCAPE_KEY_CODE: {
          if (typeof onClose === 'function') {
            onClose(state, event)
          }
          return
        }
        case ENTER_KEY_CODE: {
          if (
            typeof onSubmit === 'function' &&
            (typeof validate !== 'function' || validate(state) === true)
          ) {
            onSubmit(state, event)
          }
          return
        }
        case TAB_KEY_CODE: {
          const focusableElements = getFocusableElements()
          const index = findElementIndex(
            event.target as HTMLElement,
            focusableElements
          )
          if (
            index === focusableElements.length - 1 &&
            event.shiftKey === false
          ) {
            event.preventDefault()
            focusableElements[0].focus()
            return
          }
          if (index === 0 && event.shiftKey === true) {
            event.preventDefault()
            focusableElements[focusableElements.length - 1].focus()
          }
        }
      }
    },
    [state, onClose, onSubmit, validate]
  )
  const handleSubmit = useCallback(
    function (event?: Event): void {
      if (typeof event !== 'undefined') {
        event.preventDefault()
      }
      if (
        typeof onSubmit === 'function' &&
        (typeof validate !== 'function' || validate(state) === true)
      ) {
        onSubmit(state, event)
      }
    },
    [state, onSubmit, validate]
  )
  const isValid = useCallback(
    function (): boolean {
      if (typeof validate !== 'function') {
        throw new Error('Need a `validate` callback')
      }
      return validate(state) === true
    },
    [state, validate]
  )
  useEffect(
    function (): () => void {
      window.addEventListener('keydown', handleKeyDown)
      return function () {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown]
  )
  useEffect(function (): void {
    const focusableElement = document.querySelector(
      '[data-initial-focus]'
    ) as HTMLElement
    if (focusableElement !== null) {
      focusableElement.focus()
      return
    }
    const tabbableElements = getFocusableElements()
    if (tabbableElements.length === 0) {
      window.focus()
      return
    }
    tabbableElements[0].focus()
  }, [])
  return {
    state,
    handleChange,
    handleSubmit,
    isValid
  }
}

function getFocusableElements (): Array<HTMLElement> {
  const elements = document.querySelectorAll(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
}

function findElementIndex (
  targetElement: HTMLElement,
  elements: Array<HTMLElement>
): number {
  return elements.reduce(function (result, element, index) {
    if (result === -1 && element.isEqualNode(targetElement)) {
      return index
    }
    return result
  }, -1)
}
