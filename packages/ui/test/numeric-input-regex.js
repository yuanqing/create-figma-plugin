import test from 'ava'
import { numericInputRegex } from '../src/components/textbox/utilities/numeric-input-regex'

test('empty string', async function (t) {
  t.plan(1)
  t.true(numericInputRegex.test(''))
})

test('space', async function (t) {
  t.plan(1)
  t.false(numericInputRegex.test(' '))
})

test('alphabetic strings', async function (t) {
  t.plan(2)
  t.false(numericInputRegex.test('x'))
  t.false(numericInputRegex.test('foo'))
})

test('positive numbers', async function (t) {
  t.plan(5)
  t.true(numericInputRegex.test('3'))
  t.true(numericInputRegex.test('3.'))
  t.true(numericInputRegex.test('3.142'))
  t.true(numericInputRegex.test('.'))
  t.true(numericInputRegex.test('.142'))
})

test('negative numbers', async function (t) {
  t.plan(6)
  t.true(numericInputRegex.test('-'))
  t.true(numericInputRegex.test('-3'))
  t.true(numericInputRegex.test('-3.'))
  t.true(numericInputRegex.test('-3.142'))
  t.true(numericInputRegex.test('-.'))
  t.true(numericInputRegex.test('-.142'))
})
