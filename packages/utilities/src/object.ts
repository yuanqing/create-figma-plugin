/**
 * Creates a deep copy of the given object.
 *
 * @category Object
 */
export function cloneObject(object: any): any {
  const type = typeof object
  if (
    object === null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined'
  ) {
    return object
  }
  if (Array.isArray(object)) {
    return object.map(function (value) {
      return cloneObject(value)
    })
  }
  const result: { [key: string]: any } = {}
  for (const key in object) {
    result[key] = cloneObject(object[key])
  }
  return result
}

/**
 * Performs a *shallow* comparison of arrays `a` and `b`.
 *
 * @returns `true` if `a` and `b` are the same, else `false`
 * @category Object
 */
export function compareArrays(a: Array<any>, b: Array<any>): boolean {
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
 * Performs a *deep* comparison of objects `a` and `b`.
 *
 * @returns `true` if `a` and `b` are the same, else `false`
 * @category Object
 */
export function compareObjects(a: any, b: any): boolean {
  const type = typeof a
  if (
    a === null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined'
  ) {
    return a === b
  }
  if (Array.isArray(a)) {
    if (Array.isArray(b) === false) {
      return false
    }
    if (a.length !== b.length) {
      return false
    }
    let result = true
    a.forEach(function (value, index) {
      if (result === true && compareObjects(value, b[index]) === false) {
        result = false
      }
    })
    return result
  }
  if (typeof b !== 'object') {
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
 * Extracts the specified list of `attributes` from the given `array` of
 * objects.
 *
 * @returns An array of plain objects
 * @category Object
 */
export function extractAttributes(
  array: Array<{ [key: string]: any }>,
  attributes: Array<string>
): Array<{ [key: string]: any }> {
  const result = []
  for (const object of array) {
    const item: { [key: string]: any } = {}
    for (const attribute of attributes) {
      const value = object[attribute]
      item[attribute] =
        typeof value === 'undefined' || object[attribute] === '' ? null : value
    }
    result.push(item)
  }
  return result
}
