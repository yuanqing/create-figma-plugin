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
