import { useEffect, useState } from 'preact/hooks'

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
  function handleKeyDown (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      handleSubmitCallback(inputs)
      return
    }
    if (event.keyCode === ESCAPE_KEY_CODE) {
      handleCancelCallback()
    }
  }
  if (shouldHandleKeyDown === true) {
    useEffect(
      function () {
        window.addEventListener('keydown', handleKeyDown)
        return function () {
          window.removeEventListener('keydown', handleKeyDown)
        }
      },
      [inputs]
    )
  }
  return {
    inputs,
    setInputs,
    handleSubmit,
    handleInput
  }
}
