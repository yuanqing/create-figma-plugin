import { useCallback, useState } from 'preact/hooks'

export function useFormState<S>(
  initialState: S,
  transform?: (state: S) => S
): {
  formState: S
  setFormState: <N extends keyof S>(state: S[N], name: undefined | N) => void
} {
  const [formState, setState] = useState(initialState)
  const setFormState = useCallback(
    function <N extends keyof S>(value: S[N], name: undefined | N) {
      if (typeof name === 'undefined') {
        throw new Error('`name` is `undefined`')
      }
      setState(function (previousState: S): S {
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
