import {
  invalidCharactersRegex,
  numbersRegex,
  operatorRegex,
  operatorSuffixRegex
} from './private/regex.js'

/**
 * Evaluates the given numeric `expression`.
 *
 * @returns Returns the result of evaluating the given numeric `expression`,
 * else `null` for an invalid expression.
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
