import { test } from 'tap'

import { extractAttributes } from '../../src/object'

test('valid attribute', function (t) {
  t.plan(1)
  t.deepEqual(
    extractAttributes(
      [
        { x: 1, y: 2, z: 3 },
        { x: 4, y: 5 }
      ],
      ['x', 'y']
    ),
    [
      { x: 1, y: 2 },
      { x: 4, y: 5 }
    ]
  )
})

test('invalid attribute', function (t) {
  t.plan(1)
  try {
    extractAttributes([{ x: 1 }], ['y'])
  } catch (error) {
    t.same(error.message, 'Attribute `y` does not exist')
  }
})
