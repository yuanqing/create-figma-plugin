const CHECK = '✔'
const CROSS = '✘'
const WARNING = '⚠'
const SPACE = '\u00a0'

export function formatSuccessMessage (message: string): string {
  return `${CHECK} ${SPACE} ${message}`
}

export function formatErrorMessage (message: string): string {
  return `${CROSS} ${SPACE} ${message}`
}

export function formatWarningMessage (message: string): string {
  return `${WARNING} ${SPACE} ${message}`
}

export function pluralize (
  number: number,
  singular: string,
  plural?: string
): string {
  if (number === 1) {
    return singular
  }
  return typeof plural === 'undefined' ? `${singular}s` : plural
}
