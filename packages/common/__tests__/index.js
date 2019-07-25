import test from 'ava'
import * as build from '..'

test('exports are not `undefined`', function (t) {
  t.plan(2)
  t.true(typeof build.constants !== 'undefined')
  t.true(typeof build.readConfig !== 'undefined')
})
