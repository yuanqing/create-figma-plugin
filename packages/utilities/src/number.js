const invalidCharactersRegex = /[^\d.+\-*/]/
const operandRegex = /^-?\d*(?:\.\d*)?$/
const operatorRegex = /[+\-*/]/

export function isNumericExpression (value) {
  return operatorRegex.test(value) === true
}

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
    return eval(value) // eslint-disable-line no-eval
  }
  return parseFloat(value)
}
