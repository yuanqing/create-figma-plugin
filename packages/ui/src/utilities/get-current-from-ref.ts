import { RefObject } from 'preact'

export function getCurrentFromRef<R>(ref: RefObject<R>): R {
  if (ref.current === null) {
    throw new Error('`ref.current` is `undefined`')
  }
  return ref.current
}
