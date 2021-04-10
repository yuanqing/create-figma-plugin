import { test } from 'tap'

import { isValidNumericInput } from '../../src/number'

test('string - empty', async function (t) {
  t.plan(1)
  t.ok(isValidNumericInput('', true))
})

test('string - space', async function (t) {
  t.plan(1)
  t.notOk(isValidNumericInput(' ', true))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.notOk(isValidNumericInput('x', true))
  t.notOk(isValidNumericInput('foo', true))
})

test('number - valid, positive', async function (t) {
  t.plan(1)
  t.ok(isValidNumericInput('3', true))
})

test('number - valid, negative', async function (t) {
  t.plan(2)
  t.ok(isValidNumericInput('-', true))
  t.ok(isValidNumericInput('-3', true))
})

test('number - invalid', async function (t) {
  t.plan(8)
  t.notOk(isValidNumericInput('3.', true))
  t.notOk(isValidNumericInput('3.142', true))
  t.notOk(isValidNumericInput('.', true))
  t.notOk(isValidNumericInput('.142', true))
  t.notOk(isValidNumericInput('-3.', true))
  t.notOk(isValidNumericInput('-3.142', true))
  t.notOk(isValidNumericInput('-.', true))
  t.notOk(isValidNumericInput('-.142', true))
})

test('mathematical expression - valid', async function (t) {
  t.plan(2)
  t.ok(isValidNumericInput('3+', true))
  t.ok(isValidNumericInput('1+2-3*4/5', true))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(5)
  t.notOk(isValidNumericInput('-3+.', true))
  t.notOk(isValidNumericInput('-3+.142', true))
  t.notOk(isValidNumericInput('3++', true))
  t.notOk(isValidNumericInput('--3', true))
  t.notOk(isValidNumericInput('.3.', true))
})
