import { useCallback, useState } from 'preact/hooks'

import { useFocusTrap } from '../use-focus-trap'
import { InitialFocus, useInitialFocus } from '../use-initial-focus'
import { useWindowKeyDownHandler } from '../use-window-key-down-handler'

export function useForm<State>(
  initialState: State,
  options: {
    close: (state: State) => void
    transform?: (state: State) => State
    validate?: (state: State) => boolean
    submit: (state: State) => void
  }
): {
  disabled: boolean
  formState: State
  handleSubmit: () => void
  initialFocus: InitialFocus
  setFormState: <Name extends keyof State>(
    state: State[Name],
    name: undefined | Name
  ) => void
} {
  const { close, submit, transform, validate } = options

  const [formState, setState] = useState(initialState)

  const setFormState = useCallback(
    function <Name extends keyof State>(value: State[Name], name?: Name) {
      if (typeof name === 'undefined') {
        throw new Error('`name` is `undefined`')
      }
      setState(function (previousState: State): State {
        const newState = {
          ...previousState,
          ...{ [name]: value }
        }
        return typeof transform === 'undefined' ? newState : transform(newState)
      })
    },
    [transform]
  )

  const handleSubmit = useCallback(
    function (): void {
      if (typeof validate !== 'undefined' && validate(formState) === false) {
        return
      }
      submit(formState)
    },
    [formState, submit, validate]
  )
  useWindowKeyDownHandler('Enter', handleSubmit)

  const handleClose = useCallback(
    function (): void {
      close(formState)
    },
    [close, formState]
  )
  useWindowKeyDownHandler('Escape', handleClose)

  useFocusTrap()

  const disabled =
    typeof validate !== 'undefined' ? validate(formState) === false : false

  const initialFocus = useInitialFocus()
  return {
    disabled,
    formState,
    handleSubmit,
    initialFocus,
    setFormState
  }
}
