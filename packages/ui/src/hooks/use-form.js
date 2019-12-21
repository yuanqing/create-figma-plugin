import {
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE
} from '@create-figma-plugin/utilities/src/key-codes'
import { useCallback, useEffect, useState } from 'preact/hooks'

export function useForm (
  initialInputs,
  handleSubmitCallback,
  handleCancelCallback,
  shouldHandleKeyDown
) {
  const [inputs, setInputs] = useState(initialInputs)
  const handleSubmit = useCallback(
    function (event) {
      if (typeof event !== 'undefined') {
        event.preventDefault()
      }
      handleSubmitCallback(inputs)
    },
    [inputs, handleSubmitCallback]
  )
  const handleInput = useCallback(
    function (value, name) {
      setInputs({
        ...inputs,
        [name]: value
      })
    },
    [inputs, setInputs]
  )
  const handleKeyDown = useCallback(
    function (event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        handleSubmitCallback(inputs)
        return
      }
      if (event.keyCode === ESCAPE_KEY_CODE) {
        handleCancelCallback()
      }
    },
    [inputs, handleCancelCallback, handleSubmitCallback]
  )
  useEffect(
    function () {
      if (shouldHandleKeyDown === true) {
        window.addEventListener('keydown', handleKeyDown)
        return function () {
          window.removeEventListener('keydown', handleKeyDown)
        }
      }
    },
    [shouldHandleKeyDown, handleKeyDown]
  )
  return {
    inputs,
    setInputs,
    handleSubmit,
    handleInput
  }
}
