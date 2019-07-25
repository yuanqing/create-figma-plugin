import test from 'ava'
import * as index from '..'

test('exports are not `undefined`', function (t) {
  t.plan(3)
  t.true(typeof index.constants !== 'undefined')
  t.true(typeof index.logPrefix !== 'undefined')
  t.true(typeof index.readConfig !== 'undefined')
})
