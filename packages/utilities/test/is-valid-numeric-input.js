import test from 'ava'
import { isValidNumericInput } from '../src/number'

test('empty string', async function (t) {
  t.plan(1)
  t.true(isValidNumericInput(''))
})

test('space', async function (t) {
  t.plan(1)
  t.false(isValidNumericInput(' '))
})

test('alphabetic strings', async function (t) {
  t.plan(2)
  t.false(isValidNumericInput('x'))
  t.false(isValidNumericInput('foo'))
})

test('positive numbers', async function (t) {
  t.plan(5)
  t.true(isValidNumericInput('3'))
  t.true(isValidNumericInput('3.'))
  t.true(isValidNumericInput('3.142'))
  t.true(isValidNumericInput('.'))
  t.true(isValidNumericInput('.142'))
})

test('negative numbers', async function (t) {
  t.plan(6)
  t.true(isValidNumericInput('-'))
  t.true(isValidNumericInput('-3'))
  t.true(isValidNumericInput('-3.'))
  t.true(isValidNumericInput('-3.142'))
  t.true(isValidNumericInput('-.'))
  t.true(isValidNumericInput('-.142'))
})

test('valid math expressions', async function (t) {
  t.plan(4)
  t.true(isValidNumericInput('3+'))
  t.true(isValidNumericInput('-3+.'))
  t.true(isValidNumericInput('-3+.142'))
  t.true(isValidNumericInput('1+2-3*4/5'))
})

test('invalid math expressions', async function (t) {
  t.plan(3)
  t.false(isValidNumericInput('3++'))
  t.false(isValidNumericInput('--3'))
  t.false(isValidNumericInput('.3.'))
})
