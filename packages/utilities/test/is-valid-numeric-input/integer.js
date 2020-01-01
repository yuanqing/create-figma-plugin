import test from 'ava'
import { isValidNumericInput } from '../../src/number'

test('string - empty', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput('', true))
})

test('string - space', async function (t) {
  t.plan(1)
  t.false(isValidNumericInput(' ', true))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.false(isValidNumericInput('x', true))
  t.false(isValidNumericInput('foo', true))
})

test('number - valid, positive', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput('3', true))
})

test('number - valid, negative', async function (t) {
  t.plan(2)
  t.true(isValidNumericInput('-', true))
  t.true(isValidNumericInput('-3', true))
})

test('number - invalid', async function (t) {
  t.plan(8)
  t.false(isValidNumericInput('3.', true))
  t.false(isValidNumericInput('3.142', true))
  t.false(isValidNumericInput('.', true))
  t.false(isValidNumericInput('.142', true))
  t.false(isValidNumericInput('-3.', true))
  t.false(isValidNumericInput('-3.142', true))
  t.false(isValidNumericInput('-.', true))
  t.false(isValidNumericInput('-.142', true))
})

test('mathematical expression - valid', async function (t) {
  t.plan(2)
  t.true(isValidNumericInput('3+', true))
  t.true(isValidNumericInput('1+2-3*4/5', true))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(5)
  t.false(isValidNumericInput('-3+.', true))
  t.false(isValidNumericInput('-3+.142', true))
  t.false(isValidNumericInput('3++', true))
  t.false(isValidNumericInput('--3', true))
  t.false(isValidNumericInput('.3.', true))
})
