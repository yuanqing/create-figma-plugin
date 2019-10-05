import { addEventListener, triggerEvent } from './events'

let count = 0

export function fetch (url, options) {
  const id = count++
  return new Promise(function (resolve, reject) {
    const removeEventListener = addEventListener('FETCH_RESULT', function (
      error,
      resultId,
      result
    ) {
      if (resultId !== id) {
        return
      }
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
      removeEventListener()
    })
    triggerEvent('FETCH_REQUEST', id, url, options)
  })
}
