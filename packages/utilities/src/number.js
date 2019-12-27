const invalidCharactersRegex = /[^\d.+\-*/]/
const operandRegex = /^-?\d*(?:\.\d*)?$/
const operatorRegex = /[+\-*/]/
const operatorSuffixRegex = /[+\-*/]$/

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

export function evaluateNumericExpression (value) {
  if (value === '' || invalidCharactersRegex.test(value) === true) {
    return null
  }
  if (operatorRegex.test(value) === true) {
    if (operatorSuffixRegex.test(value) === true) {
      // Drop the operator suffix
      return eval(value.substring(0, value.length - 1)) // eslint-disable-line no-eval
    }
    return eval(value) // eslint-disable-line no-eval
  }
  return parseFloat(value)
}
