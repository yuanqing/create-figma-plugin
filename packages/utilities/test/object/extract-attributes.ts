import { test } from 'tap'

import { extractAttributes } from '../../src/object'

test('extract attributes', function (t) {
  t.plan(1)
  t.deepEqual(
    extractAttributes<{ x: number; y: number; z: number }>(
      [
        { x: 1, y: 2, z: 3 },
        { x: 4, y: 5, z: 6 }
      ],
      ['x', 'z']
    ),
    [
      { x: 1, z: 3 },
      { x: 4, z: 6 }
    ]
  )
})
