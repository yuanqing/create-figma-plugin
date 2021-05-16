import test from 'ava'

import { watchIgnoreRegex } from '../../src/watch-async/watch-ignore-regex.js'

test('ignored', function (t) {
  t.plan(7)
  t.true(watchIgnoreRegex.test('node_modules'))
  t.true(watchIgnoreRegex.test('manifest.json'))
  t.true(watchIgnoreRegex.test('package-lock.json'))
  t.true(watchIgnoreRegex.test('style.css.d.ts'))
  t.true(watchIgnoreRegex.test('src/style.css.d.ts'))
  t.true(watchIgnoreRegex.test('build'))
  t.true(watchIgnoreRegex.test('build/main.js'))
})

test('not ignored', function (t) {
  t.plan(6)
  t.false(watchIgnoreRegex.test('package.json'))
  t.false(watchIgnoreRegex.test('tsconfig.json'))
  t.false(watchIgnoreRegex.test('src/data.json'))
  t.false(watchIgnoreRegex.test('src/main.js'))
  t.false(watchIgnoreRegex.test('src/styles.css'))
  t.false(watchIgnoreRegex.test('src/ui.tsx'))
})
