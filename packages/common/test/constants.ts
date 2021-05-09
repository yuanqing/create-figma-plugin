import test from 'ava'

import { constants } from '../src/constants.js'

test('is an object', function (t) {
  t.plan(2)
  t.true(typeof constants === 'object')
  t.true(Object.keys(constants).length > 0)
})
