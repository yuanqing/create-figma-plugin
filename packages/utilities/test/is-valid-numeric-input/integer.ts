import { test } from 'tap'

import { isValidNumericInput } from '../../src/number/is-valid-numeric-input'

test('string - empty', async function (t) {
  t.plan(1)
  t.ok(isValidNumericInput('', { integersOnly: true }))
})

test('string - space', async function (t) {
  t.plan(1)
  t.notOk(isValidNumericInput(' ', { integersOnly: true }))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.notOk(isValidNumericInput('x', { integersOnly: true }))
  t.notOk(isValidNumericInput('foo', { integersOnly: true }))
})

test('number - valid, positive', async function (t) {
  t.plan(1)
  t.ok(isValidNumericInput('3', { integersOnly: true }))
})

test('number - valid, negative', async function (t) {
  t.plan(2)
  t.ok(isValidNumericInput('-', { integersOnly: true }))
  t.ok(isValidNumericInput('-3', { integersOnly: true }))
})

test('number - invalid', async function (t) {
  t.plan(8)
  t.notOk(isValidNumericInput('3.', { integersOnly: true }))
  t.notOk(isValidNumericInput('3.142', { integersOnly: true }))
  t.notOk(isValidNumericInput('.', { integersOnly: true }))
  t.notOk(isValidNumericInput('.142', { integersOnly: true }))
  t.notOk(isValidNumericInput('-3.', { integersOnly: true }))
  t.notOk(isValidNumericInput('-3.142', { integersOnly: true }))
  t.notOk(isValidNumericInput('-.', { integersOnly: true }))
  t.notOk(isValidNumericInput('-.142', { integersOnly: true }))
})

test('mathematical expression - valid', async function (t) {
  t.plan(2)
  t.ok(isValidNumericInput('3+', { integersOnly: true }))
  t.ok(isValidNumericInput('1+2-3*4/5', { integersOnly: true }))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(5)
  t.notOk(isValidNumericInput('-3+.', { integersOnly: true }))
  t.notOk(isValidNumericInput('-3+.142', { integersOnly: true }))
  t.notOk(isValidNumericInput('3++', { integersOnly: true }))
  t.notOk(isValidNumericInput('--3', { integersOnly: true }))
  t.notOk(isValidNumericInput('.3.', { integersOnly: true }))
})
