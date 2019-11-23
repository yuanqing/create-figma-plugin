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
  function handleSubmit (event) {
    if (typeof event !== 'undefined') {
      event.preventDefault()
    }
    handleSubmitCallback(inputs)
  }
  function handleInput (event) {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    setInputs({
      ...inputs,
      [event.target.name]: value
    })
  }
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
    [handleKeyDown, shouldHandleKeyDown]
  )
  return {
    inputs,
    setInputs,
    handleSubmit,
    handleInput
  }
}
