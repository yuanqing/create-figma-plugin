import { test } from 'tap'

import * as index from '../src/index'

test('exports are not `undefined`', function (t) {
  t.plan(3)
  t.ok(typeof index.constants !== 'undefined')
  t.ok(typeof index.log !== 'undefined')
  t.ok(typeof index.readConfigAsync !== 'undefined')
})
