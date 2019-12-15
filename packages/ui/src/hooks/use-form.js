import { useCallback, useEffect, useState } from 'preact/hooks'

const ENTER_KEY_CODE = 13
const ESCAPE_KEY_CODE = 27

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
    function handleInput (value, key) {
      setInputs({
        ...inputs,
        [key]: value
      })
    },
    [inputs]
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
