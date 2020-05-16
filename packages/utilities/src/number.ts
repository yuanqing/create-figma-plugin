const invalidCharactersRegex = /[^\d.+\-*/]/
const floatOperandRegex = /^-?\d*(?:\.\d*)?$/
const integerOperandRegex = /^-?\d*$/
const operatorRegex = /[+\-*/]/
const operatorSuffixRegex = /[+\-*/]$/

export function isValidNumericInput (
  value: string,
  integerOnly: boolean = false
): boolean {
  const split = (value[0] === '-' ? value.substring(1) : value).split(
    operatorRegex
  )
  let i = -1
  while (++i < split.length) {
    const operand = split[i]
    if (
      (operand === '' && i !== split.length - 1) ||
      (integerOnly === true ? integerOperandRegex : floatOperandRegex).test(
        operand
      ) === false
    ) {
      return false
    }
  }
  return true
}

export function evaluateNumericExpression (value: string): null | number {
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
