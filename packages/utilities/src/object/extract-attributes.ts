/**
 * Extracts the specified list of `attributes` from the given `array` of
 * objects.
 *
 * @returns Returns an array of plain objects.
 * @category Object
 */
export function extractAttributes<O, K extends keyof O>(
  array: Array<O>,
  attributes: K[]
): Array<Pick<O, K>> {
  const result: Array<Pick<O, K>> = []
  for (const object of array) {
    result.push(pick(object, attributes))
  }
  return result
}
function pick<O, K extends keyof O>(object: O, keys: K[]): Pick<O, K> {
  const result = {} as Pick<O, K>
  for (const key of keys) {
    const value = object[key]
    if (typeof value === 'undefined') {
      throw new Error(`Key \`${key}\` does not exist on \`object\``)
    }
    result[key] = value
  }
  return result
}
