import { test } from 'tap'

import { constants } from '../src/constants'

test('is an object', function (t) {
  t.plan(2)
  t.ok(typeof constants === 'object')
  t.ok(Object.keys(constants).length > 0)
})
