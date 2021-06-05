import test from 'ava'

import { convertHexColorToRgbColor } from '../../src/color/convert-hex-color-to-rgb-color.js'

test('invalid hex color', function (t) {
  t.plan(8)
  t.is(convertHexColorToRgbColor(''), null)
  t.is(convertHexColorToRgbColor('0'), null)
  t.is(convertHexColorToRgbColor('1'), null)
  t.is(convertHexColorToRgbColor('00'), null)
  t.is(convertHexColorToRgbColor('0000'), null)
  t.is(convertHexColorToRgbColor('00000'), null)
  t.is(convertHexColorToRgbColor('0000000'), null)
  t.is(convertHexColorToRgbColor('yellow'), null)
})

test('valid hex color', function (t) {
  t.plan(4)
  t.deepEqual(convertHexColorToRgbColor('fff'), { b: 1, g: 1, r: 1 })
  t.deepEqual(convertHexColorToRgbColor('000'), { b: 0, g: 0, r: 0 })
  t.deepEqual(convertHexColorToRgbColor('000000'), { b: 0, g: 0, r: 0 })
  t.deepEqual(convertHexColorToRgbColor('abcdef'), {
    b: 0.9372549019607843,
    g: 0.803921568627451,
    r: 0.6705882352941176
  })
})
