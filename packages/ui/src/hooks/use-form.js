import { useCallback, useEffect, useState } from 'preact/hooks'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../utilities/key-codes'

export function useForm (initialInputs, { close, submit, validate }) {
  const [inputs, setInputs] = useState(initialInputs)
  const handleSubmit = useCallback(
    function (event) {
      if (typeof event !== 'undefined') {
        event.preventDefault()
      }
      if (typeof validate !== 'function' || validate(inputs) === true) {
        submit(inputs)
      }
    },
    [inputs, submit, validate]
  )
  function handleInput (value, name) {
    setInputs(function (inputs) {
      return {
        ...inputs,
        [name]: value
      }
    })
  }
  const handleKeyDown = useCallback(
    function (event) {
      if (
        event.keyCode === ENTER_KEY_CODE &&
        (typeof validate !== 'function' || validate(inputs) === true)
      ) {
        submit(inputs)
        return
      }
      if (event.keyCode === ESCAPE_KEY_CODE) {
        close()
      }
    },
    [close, inputs, submit, validate]
  )
  const isValid = useCallback(
    function () {
      if (typeof validate !== 'function') {
        throw new Error('Need a `validate` callback')
      }
      return validate(inputs)
    },
    [inputs, validate]
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
    inputs,
    handleSubmit,
    handleInput,
    isValid
  }
}
