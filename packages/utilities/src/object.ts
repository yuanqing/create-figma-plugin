import type { JsonValue } from './types'

/**
 * Creates a deep copy of the given object.
 *
 * @category Object
 */
export function cloneObject<T>(object: T): T {
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
    const result: Array<unknown> = []
    for (const value of object as Array<unknown>) {
      result.push(cloneObject(value))
    }
    return result as any
  }
  const result: Record<string, unknown> = {}
  for (const key in object) {
    result[key] = cloneObject(object[key])
  }
  return result as T
}

/**
 * Performs a *deep* comparison of objects `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
export function compareObjects(
  a: JsonValue | undefined,
  b: JsonValue | undefined
): boolean {
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
 * Compares the string arrays `a` and `b`.
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
export function extractAttributes<T, K extends keyof T>(
  array: Array<T>,
  attributes: K[]
): Array<Pick<T, K>> {
  const result: Array<Pick<T, K>> = []
  for (const object of array) {
    result.push(pick(object, attributes))
  }
  return result
}

function pick<T, K extends keyof T>(object: T, attributes: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const attribute of attributes) {
    const value = object[attribute]
    if (typeof value === 'undefined') {
      throw new Error(`Attribute \`${attribute}\` does not exist`)
    }
    result[attribute] = value
  }
  return result
}
