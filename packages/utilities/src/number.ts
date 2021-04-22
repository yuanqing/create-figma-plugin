import { MIXED_NUMBER, MIXED_STRING } from './constants'

const floatOperandRegex = /^-?\d*(?:\.\d*)?$/
const integerOperandRegex = /^-?\d*$/
const operatorRegex = /[+\-*/]/
const operatorSuffixRegex = /[+\-*/]$/
const numbersRegex = /\d/
const invalidCharactersRegex = /[^\d.+\-*/]/

/**
 * Checks if `value` is a numeric expression, as input by a user. “Partial”
 * inputs are considered valid. Set `options.integersOnly` to `true` to check
 * that the expression contains only integers. `options.integersOnly` defaults
 * to `false` if not specified.
 *
 * @returns Returns `true` if `value` is a valid numeric expression,
 * else `false`.
 * @category Number
 */
export function isValidNumericInput(
  value: string,
  options: { integersOnly: boolean } = { integersOnly: false }
): boolean {
  const split = (value[0] === '-' ? value.substring(1) : value).split(
    operatorRegex
  )
  let i = -1
  while (++i < split.length) {
    const operand = split[i]
    if (
      (operand === '' && i !== split.length - 1) ||
      (options.integersOnly === true
        ? integerOperandRegex
        : floatOperandRegex
      ).test(operand) === false
    ) {
      return false
    }
  }
  return true
}

/**
 * Evaluates the given numeric `expression`.
 *
 * @returns Returns the result of evaluating the given `expression`.
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

export function mapTextboxNumberToString(value: null | number): string {
  if (value === null) {
    return ''
  }
  if (value === MIXED_NUMBER) {
    return MIXED_STRING
  }
  return `${value}`
}
