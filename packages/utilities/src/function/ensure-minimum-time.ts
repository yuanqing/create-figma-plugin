/**
 * Creates an `async` function that will invoke the given `callback` but run
 * for the `minimumTime` (in milliseconds).
 *
 * @category Function
 */
export function ensureMinimumTime<S, T extends any[]>(
  minimumTime: number,
  callback: (...args: T) => Promise<S>
): (...args: T) => Promise<S> {
  return async function (...args: T): Promise<S> {
    const startTimestamp = Date.now()
    const result = await callback(...args)
    const elapsedTime = Date.now() - startTimestamp
    if (elapsedTime >= minimumTime) {
      return result
    }
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(result)
      }, minimumTime - elapsedTime)
    })
  }
}
