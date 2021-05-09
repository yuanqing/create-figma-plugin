import test from 'ava'

import { isValidNumericInput } from '../../../src/number/is-valid-numeric-input.js'

test('string - empty', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput(''))
})

test('string - space', async function (t) {
  t.plan(1)
  t.false(isValidNumericInput(' '))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.false(isValidNumericInput('x'))
  t.false(isValidNumericInput('foo'))
})

test('number - valid, positive', async function (t) {
  t.plan(5)
  t.true(isValidNumericInput('3'))
  t.true(isValidNumericInput('3.'))
  t.true(isValidNumericInput('3.142'))
  t.true(isValidNumericInput('.'))
  t.true(isValidNumericInput('.142'))
})

test('number - valid, negative', async function (t) {
  t.plan(6)
  t.true(isValidNumericInput('-'))
  t.true(isValidNumericInput('-3'))
  t.true(isValidNumericInput('-3.'))
  t.true(isValidNumericInput('-3.142'))
  t.true(isValidNumericInput('-.'))
  t.true(isValidNumericInput('-.142'))
})

test('mathematical expression - valid', async function (t) {
  t.plan(4)
  t.true(isValidNumericInput('3+'))
  t.true(isValidNumericInput('-3+.'))
  t.true(isValidNumericInput('-3+.142'))
  t.true(isValidNumericInput('1+2-3*4/5'))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(3)
  t.false(isValidNumericInput('3++'))
  t.false(isValidNumericInput('--3'))
  t.false(isValidNumericInput('.3.'))
})
