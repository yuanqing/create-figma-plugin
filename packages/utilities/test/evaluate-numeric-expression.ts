import { test } from 'tap'

import { evaluateNumericExpression } from '../src/number'

test('positive numbers', async function (t) {
  t.plan(5)
  t.is(evaluateNumericExpression('0'), 0)
  t.is(evaluateNumericExpression('3'), 3)
  t.is(evaluateNumericExpression('3.'), 3)
  t.is(evaluateNumericExpression('.142'), 0.142)
  t.is(evaluateNumericExpression('3.142'), 3.142)
})

test('negative numbers', async function (t) {
  t.plan(5)
  t.is(evaluateNumericExpression('-0'), -0)
  t.is(evaluateNumericExpression('-3'), -3)
  t.is(evaluateNumericExpression('-3.'), -3)
  t.is(evaluateNumericExpression('-.142'), -0.142)
  t.is(evaluateNumericExpression('-3.142'), -3.142)
})

test('expressions', async function (t) {
  t.plan(5)
  t.is(evaluateNumericExpression('0+1'), 1)
  t.is(evaluateNumericExpression('3-2'), 1)
  t.is(evaluateNumericExpression('3.*3'), 9)
  t.is(evaluateNumericExpression('3.142/4'), 0.7855)
  t.is(evaluateNumericExpression('1+2*3/4'), 2.5)
})

test('expressions ending with an operator', async function (t) {
  t.plan(5)
  t.is(evaluateNumericExpression('0+1+'), 1)
  t.is(evaluateNumericExpression('3-2-'), 1)
  t.is(evaluateNumericExpression('3.*3*'), 9)
  t.is(evaluateNumericExpression('3.142/4/'), 0.7855)
  t.is(evaluateNumericExpression('1+2*3/4+'), 2.5)
})

test('expressions starting with a negative number', async function (t) {
  t.plan(5)
  t.is(evaluateNumericExpression('-0+1'), 1)
  t.is(evaluateNumericExpression('-3-2'), -5)
  t.is(evaluateNumericExpression('-3.*3'), -9)
  t.is(evaluateNumericExpression('-3.142/4'), -0.7855)
  t.is(evaluateNumericExpression('-1+2*3/4'), 0.5)
})
