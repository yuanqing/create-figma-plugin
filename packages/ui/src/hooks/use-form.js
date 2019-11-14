import { useEffect, useState } from 'preact/hooks'

export function useForm (
  initialInputs,
  handleSubmitCallback,
  handleCancelCallback
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
  function handleKeyUp (event) {
    if (event.key === 'Enter') {
      handleSubmitCallback(inputs)
      return
    }
    if (event.key === 'Escape') {
      handleCancelCallback()
    }
  }
  useEffect(
    function () {
      window.addEventListener('keyup', handleKeyUp)
      return function () {
        window.removeEventListener('keyup', handleKeyUp)
      }
    },
    [inputs]
  )
  return {
    inputs,
    setInputs,
    handleSubmit,
    handleInput
  }
}
