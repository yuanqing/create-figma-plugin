const floatOperandRegex = /^-?\d*(?:\.\d*)?$/
const integerOperandRegex = /^-?\d*$/
const operatorRegex = /[+\-*/]/
const operatorSuffixRegex = /[+\-*/]$/
const numbersRegex = /\d/
const invalidCharactersRegex = /[^\d.+\-*/]/

/**
 * Checks if `value` is a numeric expression, as input by a user. “Partial”
 * inputs are considered valid. Set `integerOnly` to `true` to check that the
 * expression contains only integers. `integerOnly` defaults to `false` if not
 * specified.
 *
 * @returns `true` if `value` is a valid numeric expression, else `false`
 * @category Number
 */
export function isValidNumericInput(
  value: string,
  integerOnly = false
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

/**
 * Evaluates the given numeric `expression`.
 *
 * @returns The result of evaluating the given `expression`
 * @category Number
 */
export function evaluateNumericExpression(value: string): null | number {
  if (
    value === '' ||
    numbersRegex.test(value) === false ||
    invalidCharactersRegex.test(value) === true
  ) {
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
