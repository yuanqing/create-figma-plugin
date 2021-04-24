import { RefObject } from 'preact'

export function getCurrentFromRef<T>(ref: RefObject<T>): T {
  if (ref.current === null) {
    throw new Error('`ref.current` is `undefined`')
  }
  return ref.current
}
