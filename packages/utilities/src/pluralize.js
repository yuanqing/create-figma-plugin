export function pluralize (number, singular, plural) {
  if (number === 1) {
    return singular
  }
  return typeof plural === 'undefined' ? `${singular}s` : plural
}
