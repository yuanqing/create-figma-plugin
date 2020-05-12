import { test } from 'tap'
import * as index from '../src/index'

test('exports are not `undefined`', function (t) {
  t.plan(3)
  t.true(typeof index.constants !== 'undefined')
  t.true(typeof index.log !== 'undefined')
  t.true(typeof index.readConfigAsync !== 'undefined')
})
