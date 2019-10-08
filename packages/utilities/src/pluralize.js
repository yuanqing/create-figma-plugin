export function pluralize (singular, plural, number) {
  if (number === 1) {
    return singular
  }
  return plural
}
