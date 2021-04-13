import type { JsonValue } from 'type-fest'

/**
 * Creates a deep copy of the given object.
 *
 * @category Object
 */
export function cloneObject(object: JsonValue): JsonValue {
  if (
    object === null ||
    typeof object === 'undefined' ||
    typeof object === 'boolean' ||
    typeof object === 'number' ||
    typeof object === 'string'
  ) {
    return object
  }
  if (Array.isArray(object)) {
    return object.map(function (value) {
      return cloneObject(value)
    })
  }
  const result: Record<string, JsonValue> = {}
  for (const key in object) {
    result[key] = cloneObject(object[key])
  }
  return result
}

/**
 * Performs a *deep* comparison of objects `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
export function compareObjects(a: JsonValue, b: JsonValue): boolean {
  if (
    a === null ||
    typeof a === 'undefined' ||
    typeof a === 'boolean' ||
    typeof a === 'number' ||
    typeof a === 'string'
  ) {
    return a === b
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false
    }
    if (a.length !== b.length) {
      return false
    }
    for (const index in a) {
      if (compareObjects(a[index], b[index]) === false) {
        return false
      }
    }
    return true
  }
  if (
    b === null ||
    typeof b === 'undefined' ||
    typeof b === 'boolean' ||
    typeof b === 'number' ||
    typeof b === 'string' ||
    Array.isArray(b)
  ) {
    return false
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }
  for (const key in a) {
    if (compareObjects(a[key], b[key]) === false) {
      return false
    }
  }
  return true
}

/**
 * Compares string arrays `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
export function compareStringArrays(
  a: Array<string>,
  b: Array<string>
): boolean {
  if (a.length !== b.length) {
    return false
  }
  for (const index in a) {
    if (a[index] !== b[index]) {
      return false
    }
  }
  return true
}

/**
 * Extracts the specified list of `attributes` from the given `array` of
 * objects.
 *
 * @returns Returns an array of plain objects.
 * @category Object
 */
export function extractAttributes(
  array: Array<Record<string, boolean | null | number | string>>,
  attributes: Array<string>
): Array<Record<string, boolean | null | number | string>> {
  const result: Array<Record<string, boolean | null | number | string>> = []
  for (const object of array) {
    const item: Record<string, boolean | null | number | string> = {}
    for (const attribute of attributes) {
      const value = object[attribute]
      if (typeof value === 'undefined') {
        throw new Error(`Attribute \`${attribute}\` does not exist`)
      }
      item[attribute] = value
    }
    result.push(item)
  }
  return result
}
