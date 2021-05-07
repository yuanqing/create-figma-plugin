import { test } from 'tap'

import { isValidNumericInput } from '../../src/number/is-valid-numeric-input'

test('string - empty', async function (t) {
  t.plan(1)
  t.ok(isValidNumericInput(''))
})

test('string - space', async function (t) {
  t.plan(1)
  t.notOk(isValidNumericInput(' '))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.notOk(isValidNumericInput('x'))
  t.notOk(isValidNumericInput('foo'))
})

test('number - valid, positive', async function (t) {
  t.plan(5)
  t.ok(isValidNumericInput('3'))
  t.ok(isValidNumericInput('3.'))
  t.ok(isValidNumericInput('3.142'))
  t.ok(isValidNumericInput('.'))
  t.ok(isValidNumericInput('.142'))
})

test('number - valid, negative', async function (t) {
  t.plan(6)
  t.ok(isValidNumericInput('-'))
  t.ok(isValidNumericInput('-3'))
  t.ok(isValidNumericInput('-3.'))
  t.ok(isValidNumericInput('-3.142'))
  t.ok(isValidNumericInput('-.'))
  t.ok(isValidNumericInput('-.142'))
})

test('mathematical expression - valid', async function (t) {
  t.plan(4)
  t.ok(isValidNumericInput('3+'))
  t.ok(isValidNumericInput('-3+.'))
  t.ok(isValidNumericInput('-3+.142'))
  t.ok(isValidNumericInput('1+2-3*4/5'))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(3)
  t.notOk(isValidNumericInput('3++'))
  t.notOk(isValidNumericInput('--3'))
  t.notOk(isValidNumericInput('.3.'))
})
