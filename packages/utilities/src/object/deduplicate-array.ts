/**
 * Deduplicates the given `array`. Does not modify the original `array`.
 *
 * @returns Returns a new array without duplicated values.
 * @category Object
 */
export function deduplicateArray<T extends boolean | number | string>(
  array: Array<T>
): Array<T> {
  const object: Record<string, true> = {}
  const result: Array<T> = []
  for (const value of array) {
    if (object[`${value}`] === true) {
      continue
    }
    object[`${value}`] = true
    result.push(value)
  }
  return result
}
