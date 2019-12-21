const operandRegex = /^-?\d*(?:\.\d*)?$/
const operatorRegex = /[+\-*/]/
const invalidCharactersRegex = /[^\d.+\-*/]/

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

export function isNumericExpression (value) {
  return operandRegex.test(value) === false
}

export function evaluateNumericExpression (value) {
  if (invalidCharactersRegex.test(value) === true) {
    throw new Error(`Invalid expression: ${value}`)
  }
  if (operatorRegex.test(value) === true) {
    return eval(value) // eslint-disable-line no-eval
  }
  return parseFloat(value)
}
