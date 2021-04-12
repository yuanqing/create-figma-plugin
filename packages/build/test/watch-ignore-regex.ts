import { test } from 'tap'

import { watchIgnoreRegex } from '../src/watch-ignore-regex'

test('ignored', function (t) {
  t.plan(8)
  t.ok(watchIgnoreRegex.test('coverage'))
  t.ok(watchIgnoreRegex.test('node_modules'))
  t.ok(watchIgnoreRegex.test('package-lock.json'))
  t.ok(watchIgnoreRegex.test('style.css.d.ts'))
  t.ok(watchIgnoreRegex.test('src/style.css.d.ts'))
  t.ok(watchIgnoreRegex.test('build'))
  t.ok(watchIgnoreRegex.test('build/main.js'))
  t.ok(watchIgnoreRegex.test('manifest.json'))
})

test('not ignored', function (t) {
  t.plan(6)
  t.notOk(watchIgnoreRegex.test('package.json'))
  t.notOk(watchIgnoreRegex.test('tsconfig.json'))
  t.notOk(watchIgnoreRegex.test('src/data.json'))
  t.notOk(watchIgnoreRegex.test('src/main.js'))
  t.notOk(watchIgnoreRegex.test('src/styles.css'))
  t.notOk(watchIgnoreRegex.test('src/ui.tsx'))
})
