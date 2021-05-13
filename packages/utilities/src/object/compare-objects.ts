/**
 * Performs a *deep* equality comparison of objects `a` and `b`.
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
