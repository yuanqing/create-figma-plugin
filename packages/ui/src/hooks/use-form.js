import { useCallback, useEffect, useState } from 'preact/hooks'
import {
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE
} from '../utilities/key-codes'

export function useForm ({
  initialState,
  transform,
  validate,
  onSubmit,
  onClose
}) {
  const [state, setState] = useState(
    typeof transform === 'function' ? transform(initialState) : initialState
  )
  const handleChange = useCallback(
    function (nextState) {
      setState(function (previousState) {
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
    function (event) {
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
          const index = findElementIndex(event.target, focusableElements)
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
    function (event) {
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
    function () {
      if (typeof validate !== 'function') {
        throw new Error('Need a `validate` callback')
      }
      return validate(state) === true
    },
    [state, validate]
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
  useEffect(function () {
    const focusableElement = document.querySelector('[data-initial-focus]')
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

function getFocusableElements () {
  const elements = document.querySelectorAll(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  )
  return Array.prototype.slice.call(elements)
}

function findElementIndex (targetElement, elements) {
  return elements.reduce(function (result, element, index) {
    if (result === -1 && element.isEqualNode(targetElement)) {
      return index
    }
    return result
  }, -1)
}
