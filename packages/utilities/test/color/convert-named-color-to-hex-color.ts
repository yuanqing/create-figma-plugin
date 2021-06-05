import test from 'ava'

import { convertNamedColorToHexColor } from '../../src/color/convert-named-color-to-hex-color.js'

test('invalid named color', function (t) {
  t.plan(7)
  t.is(convertNamedColorToHexColor(''), null)
  t.is(convertNamedColorToHexColor('0'), null)
  t.is(convertNamedColorToHexColor('1'), null)
  t.is(convertNamedColorToHexColor('00'), null)
  t.is(convertNamedColorToHexColor('0000'), null)
  t.is(convertNamedColorToHexColor('00000'), null)
  t.is(convertNamedColorToHexColor('0000000'), null)
})

test('valid named color', function (t) {
  t.plan(5)
  t.deepEqual(convertNamedColorToHexColor('red'), 'FF0000')
  t.deepEqual(convertNamedColorToHexColor('white'), 'FFFFFF')
  t.deepEqual(convertNamedColorToHexColor('black'), '000000')
  t.deepEqual(convertNamedColorToHexColor('rebeccapurple'), '663399')
  t.deepEqual(convertNamedColorToHexColor('REBECCAPURPLE'), '663399')
})
