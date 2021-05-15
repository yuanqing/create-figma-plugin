import { useCallback, useState } from 'preact/hooks'

export function useFormState<State>(
  initialState: State,
  transform?: (state: State) => State
): {
  formState: State
  setFormState: <Name extends keyof State>(
    state: State[Name],
    name?: Name
  ) => void
} {
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
    [setState, transform]
  )
  return { formState, setFormState }
}
