import test from 'ava'

import { watchIgnoreRegex } from '../../src/watch-async/create-watch-ignore-regex.js'

test('ignored', function (t) {
  t.plan(6)
  t.true(watchIgnoreRegex.test('node_modules'))
  t.true(watchIgnoreRegex.test('manifest.json'))
  t.true(watchIgnoreRegex.test('package-lock.json'))
  t.true(watchIgnoreRegex.test('styles.css.d.ts'))
  t.true(watchIgnoreRegex.test('src/styles.css.d.ts'))
  t.true(watchIgnoreRegex.test('build/main.js'))
})

test('not ignored', function (t) {
  t.plan(9)
  t.false(watchIgnoreRegex.test('build-figma-plugin.manifest.js'))
  t.false(watchIgnoreRegex.test('build-figma-plugin.main.js'))
  t.false(watchIgnoreRegex.test('build-figma-plugin.ui.js'))
  t.false(watchIgnoreRegex.test('package.json'))
  t.false(watchIgnoreRegex.test('tsconfig.json'))
  t.false(watchIgnoreRegex.test('src/data.json'))
  t.false(watchIgnoreRegex.test('src/main.js'))
  t.false(watchIgnoreRegex.test('src/styles.css'))
  t.false(watchIgnoreRegex.test('src/ui.tsx'))
})
