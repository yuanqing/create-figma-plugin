/**
 * Creates a deep copy of the given object.
 *
 * @category Object
 */
export function cloneObject<O>(object: O): O {
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
  return result as O
}

/**
 * Performs a *deep* comparison of objects `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
export function compareObjects(a: any, b: any): boolean {
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
