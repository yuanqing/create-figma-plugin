import { test } from 'tap'

import { evaluateNumericExpression } from '../src/number/evaluate-numeric-expression'

test('invalid expressions', function (t) {
  t.plan(3)
  t.equal(evaluateNumericExpression(''), null)
  t.equal(evaluateNumericExpression('-'), null)
  t.equal(evaluateNumericExpression('-.'), null)
})

test('positive numbers', function (t) {
  t.plan(5)
  t.equal(evaluateNumericExpression('0'), 0)
  t.equal(evaluateNumericExpression('3'), 3)
  t.equal(evaluateNumericExpression('3.'), 3)
  t.equal(evaluateNumericExpression('.142'), 0.142)
  t.equal(evaluateNumericExpression('3.142'), 3.142)
})

test('negative numbers', function (t) {
  t.plan(5)
  t.equal(evaluateNumericExpression('-0'), -0)
  t.equal(evaluateNumericExpression('-3'), -3)
  t.equal(evaluateNumericExpression('-3.'), -3)
  t.equal(evaluateNumericExpression('-.142'), -0.142)
  t.equal(evaluateNumericExpression('-3.142'), -3.142)
})

test('expressions', function (t) {
  t.plan(5)
  t.equal(evaluateNumericExpression('0+1'), 1)
  t.equal(evaluateNumericExpression('3-2'), 1)
  t.equal(evaluateNumericExpression('3.*3'), 9)
  t.equal(evaluateNumericExpression('3.142/4'), 0.7855)
  t.equal(evaluateNumericExpression('1+2*3/4'), 2.5)
})

test('expressions ending with an operator', function (t) {
  t.plan(5)
  t.equal(evaluateNumericExpression('0+1+'), 1)
  t.equal(evaluateNumericExpression('3-2-'), 1)
  t.equal(evaluateNumericExpression('3.*3*'), 9)
  t.equal(evaluateNumericExpression('3.142/4/'), 0.7855)
  t.equal(evaluateNumericExpression('1+2*3/4+'), 2.5)
})

test('expressions starting with a negative number', function (t) {
  t.plan(5)
  t.equal(evaluateNumericExpression('-0+1'), 1)
  t.equal(evaluateNumericExpression('-3-2'), -5)
  t.equal(evaluateNumericExpression('-3.*3'), -9)
  t.equal(evaluateNumericExpression('-3.142/4'), -0.7855)
  t.equal(evaluateNumericExpression('-1+2*3/4'), 0.5)
})
