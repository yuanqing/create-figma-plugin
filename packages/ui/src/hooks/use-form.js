import { useCallback, useEffect, useState } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../utilities/key-codes'

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
    function (value, name) {
      setState(function (state) {
        const newState = {
          ...state,
          [name]: value
        }
        return typeof transform === 'function' ? transform(newState) : newState
      })
    },
    [transform, setState]
  )
  const handleKeyDown = useCallback(
    function (event) {
      if (
        event.keyCode === ENTER_KEY_CODE &&
        (typeof validate !== 'function' || validate(state) === true)
      ) {
        onSubmit(state)
        return
      }
      if (event.keyCode === ESCAPE_KEY_CODE) {
        onClose()
      }
    },
    [state, onClose, onSubmit, validate]
  )
  const isValid = useCallback(
    function () {
      if (typeof validate !== 'function') {
        throw new Error('Need a `validate` callback')
      }
      return validate(state)
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
  return {
    state,
    handleChange,
    handleSubmit,
    isValid
  }
}
