import { useCallback, useState } from 'preact/hooks'

export function useFormState<T>(initialState: T) {
  const [formState, setState] = useState(initialState)

  const setFormState = useCallback(
    function <S extends keyof T>(value: T[S], name: undefined | S) {
      if (typeof name === 'undefined') {
        throw new Error('`name` is `undefined`')
      }
      setState(function (previousState: T) {
        return {
          ...previousState,
          ...{ [name]: value }
        }
      })
    },
    [setState]
  )

  return { formState, setFormState }
}
