import test from 'ava'

import { isValidNumericInput } from '../../../src/number/is-valid-numeric-input.js'

test('string - empty', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput('', { integersOnly: true }))
})

test('string - space', async function (t) {
  t.plan(1)
  t.false(isValidNumericInput(' ', { integersOnly: true }))
})

test('string - alphabetic', async function (t) {
  t.plan(2)
  t.false(isValidNumericInput('x', { integersOnly: true }))
  t.false(isValidNumericInput('foo', { integersOnly: true }))
})

test('number - valid, positive', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput('3', { integersOnly: true }))
})

test('number - valid, negative', async function (t) {
  t.plan(2)
  t.true(isValidNumericInput('-', { integersOnly: true }))
  t.true(isValidNumericInput('-3', { integersOnly: true }))
})

test('number - invalid', async function (t) {
  t.plan(8)
  t.false(isValidNumericInput('3.', { integersOnly: true }))
  t.false(isValidNumericInput('3.142', { integersOnly: true }))
  t.false(isValidNumericInput('.', { integersOnly: true }))
  t.false(isValidNumericInput('.142', { integersOnly: true }))
  t.false(isValidNumericInput('-3.', { integersOnly: true }))
  t.false(isValidNumericInput('-3.142', { integersOnly: true }))
  t.false(isValidNumericInput('-.', { integersOnly: true }))
  t.false(isValidNumericInput('-.142', { integersOnly: true }))
})

test('mathematical expression - valid', async function (t) {
  t.plan(2)
  t.true(isValidNumericInput('3+', { integersOnly: true }))
  t.true(isValidNumericInput('1+2-3*4/5', { integersOnly: true }))
})

test('mathematical expression - invalid', async function (t) {
  t.plan(5)
  t.false(isValidNumericInput('-3+.', { integersOnly: true }))
  t.false(isValidNumericInput('-3+.142', { integersOnly: true }))
  t.false(isValidNumericInput('3++', { integersOnly: true }))
  t.false(isValidNumericInput('--3', { integersOnly: true }))
  t.false(isValidNumericInput('.3.', { integersOnly: true }))
})
