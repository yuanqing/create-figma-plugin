export const operatorRegex = /[+\-*/]/
export const operandRegex = /^-?\d*(?:\.\d*)?$/

export function isValidNumericInput (value) {
  const split = (value[0] === '-' ? value.substring(1) : value).split(
    operatorRegex
  )
  let i = -1
  while (++i < split.length) {
    const operand = split[i]
    if (
      (operand === '' && i !== split.length - 1) ||
      operandRegex.test(operand) === false
    ) {
      return false
    }
  }
  return true
}
