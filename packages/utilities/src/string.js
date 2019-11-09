const CHECK = '✔'
const CROSS = '✘'
const SPACE = '\u00a0'

export function formatSuccessMessage (message) {
  return `${CHECK} ${SPACE} ${message}`
}

export function formatErrorMessage (message) {
  return `${CROSS} ${SPACE} ${message}`
}

const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]
export function mapNumberToWord (number) {
  if (number > -1 && number < 10) {
    return numbers[number]
  }
  return `${number}`
}

export function pluralize (number, singular, plural) {
  if (number === 1) {
    return singular
  }
  return typeof plural === 'undefined' ? `${singular}s` : plural
}
