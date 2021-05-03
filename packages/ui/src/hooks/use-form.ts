import { useCallback } from 'preact/hooks'

import { useFocusTrap } from './use-focus-trap'
import { useFormState } from './use-form-state'
import { InitialFocus, useInitialFocus } from './use-initial-focus'
import { useWindowKeyDownHandler } from './use-window-key-down-handler'

export function useForm<S>(
  initialState: S,
  options: {
    close: (state: S) => void
    transform?: (state: S) => S
    validate?: (state: S) => boolean
    submit: (state: S) => void
  }
): {
  disabled: boolean
  formState: S
  handleSubmit: () => void
  initialFocus: InitialFocus
  setFormState: <N extends keyof S>(state: S[N], name: undefined | N) => void
} {
  const { close, submit, transform, validate } = options

  const { formState, setFormState } = useFormState(initialState, transform)

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
