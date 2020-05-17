import { test } from 'tap'

import { constants } from '../src/constants'

test('is an object', function (t) {
  t.plan(2)
  t.true(typeof constants === 'object')
  t.true(Object.keys(constants).length > 0)
})
