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
