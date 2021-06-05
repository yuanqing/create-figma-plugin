import test from 'ava'

import { convertRgbColorToHexColor } from '../../src/color/convert-rgb-color-to-hex-color.js'

test('invalid RGB color', function (t) {
  t.plan(5)
  t.is(convertRgbColorToHexColor({ b: 255, g: 0, r: 0 }), null)
  t.is(convertRgbColorToHexColor({ b: 0, g: 255, r: 0 }), null)
  t.is(convertRgbColorToHexColor({ b: 0, g: 0, r: 255 }), null)
  t.is(convertRgbColorToHexColor({ b: 255, g: 255, r: 255 }), null)
  t.is(convertRgbColorToHexColor({ b: -1, g: -1, r: -1 }), null)
})

test('valid RGB color', function (t) {
  t.plan(3)
  t.deepEqual(convertRgbColorToHexColor({ b: 1, g: 1, r: 1 }), 'FFFFFF')
  t.deepEqual(convertRgbColorToHexColor({ b: 0, g: 0, r: 0 }), '000000')
  t.deepEqual(
    convertRgbColorToHexColor({
      b: 0.9372549019607843,
      g: 0.803921568627451,
      r: 0.6705882352941176
    }),
    'ABCDEF'
  )
})
