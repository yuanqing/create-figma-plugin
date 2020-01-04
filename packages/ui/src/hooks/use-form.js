import { useCallback, useEffect, useState } from 'preact/hooks'
import {
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE
} from '../utilities/key-codes'

export function useForm (
  initialState,
  { transform, validate, onClose, onSubmit }
) {
  const [state, setState] = useState(
    typeof transform === 'function' ? transform(initialState) : initialState
  )
  const handleSubmit = useCallback(
    function (event) {
      if (typeof event !== 'undefined') {
        event.preventDefault()
      }
      if (typeof validate !== 'function' || validate(state) === true) {
        onSubmit(state)
      }
    },
    [state, onSubmit, validate]
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
          onClose()
          return
        }
        case ENTER_KEY_CODE: {
          if (typeof validate !== 'function' || validate(state) === true) {
            onSubmit(state)
          }
          return
        }
        case TAB_KEY_CODE: {
          const tabbableElements = document.querySelectorAll(
            ':not([disabled])[tabindex]'
          )
          const index = findElementIndex(event.target, tabbableElements)
          if (
            index === tabbableElements.length - 1 &&
            event.shiftKey === false
          ) {
            event.preventDefault()
            tabbableElements[0].focus()
            return
          }
          if (index === 0 && event.shiftKey === true) {
            event.preventDefault()
            tabbableElements[tabbableElements.length - 1].focus()
          }
        }
      }
    },
    [state, onClose, onSubmit, validate]
  )
  const isInvalid = useCallback(
    function () {
      if (typeof validate !== 'function') {
        throw new Error('Need a `validate` callback')
      }
      return validate(state) === false
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
    window.focus()
  })
  return {
    state,
    handleChange,
    handleSubmit,
    isInvalid
  }
}

function findElementIndex (targetElement, elements) {
  return Array.prototype.slice
    .call(elements)
    .reduce(function (result, element, index) {
      if (result === -1 && element.isEqualNode(targetElement)) {
        return index
      }
      return result
    }, -1)
}
