import { useCallback, useState } from 'preact/hooks'

export function useFormState<T>(initialState: T, transform?: (state: T) => T) {
  const [formState, setState] = useState(initialState)
  const setFormState = useCallback(
    function <S extends keyof T>(value: T[S], name: undefined | S) {
      if (typeof name === 'undefined') {
        throw new Error('`name` is `undefined`')
      }
      setState(function (previousState: T) {
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
