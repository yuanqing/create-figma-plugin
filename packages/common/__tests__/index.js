import test from 'ava'
import * as index from '..'

test('exports are not `undefined`', function (t) {
  t.plan(4)
  t.true(typeof index.constants !== 'undefined')
  t.true(typeof index.log !== 'undefined')
  t.true(typeof index.logPrefixes !== 'undefined')
  t.true(typeof index.readConfig !== 'undefined')
})
