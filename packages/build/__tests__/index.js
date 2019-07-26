import test from 'ava'
import * as index from '..'

test('exports are not `undefined`', function (t) {
  t.plan(2)
  t.true(typeof index.build !== 'undefined')
  t.true(typeof index.watch !== 'undefined')
})
