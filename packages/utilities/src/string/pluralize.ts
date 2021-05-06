/**
 * Returns `singular` if `number` is exactly `1`, else returns `plural`.
 * `plural` defaults to `${singular}s` if not specified.
 *
 * @category String
 */
export function pluralize(
  number: number,
  singular: string,
  plural?: string
): string {
  if (number === 1) {
    return singular
  }
  return typeof plural === 'undefined' ? `${singular}s` : plural
}
