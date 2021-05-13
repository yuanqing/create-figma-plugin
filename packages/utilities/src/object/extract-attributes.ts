/**
 * Extracts the specified list of `attributes` from the given `array` of
 * plain objects.
 *
 * @returns Returns an array of plain objects.
 * @category Object
 */
export function extractAttributes<PlainObject, Key extends keyof PlainObject>(
  array: Array<PlainObject>,
  attributes: Key[]
): Array<Pick<PlainObject, Key>> {
  const result: Array<Pick<PlainObject, Key>> = []
  for (const object of array) {
    result.push(pick(object, attributes))
  }
  return result
}
function pick<PlainObject, Key extends keyof PlainObject>(
  object: PlainObject,
  keys: Key[]
): Pick<PlainObject, Key> {
  const result = {} as Pick<PlainObject, Key>
  for (const key of keys) {
    const value = object[key]
    if (typeof value === 'undefined') {
      throw new Error(`Key \`${key}\` does not exist on \`object\``)
    }
    result[key] = value
  }
  return result
}
