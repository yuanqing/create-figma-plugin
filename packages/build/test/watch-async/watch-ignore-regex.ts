import test from 'ava'

import { createWatchIgnoreRegex } from '../../src/watch-async/create-watch-ignore-regex.js'

test('ignored', function (t) {
  t.plan(6)
  t.true(createWatchIgnoreRegex('./').test('node_modules'))
  t.true(createWatchIgnoreRegex('./').test('manifest.json'))
  t.true(createWatchIgnoreRegex('./').test('package-lock.json'))
  t.true(createWatchIgnoreRegex('./').test('styles.css.d.ts'))
  t.true(createWatchIgnoreRegex('./').test('src/styles.css.d.ts'))
  t.true(createWatchIgnoreRegex('./').test('build/main.js'))
})

test('not ignored', function (t) {
  t.plan(9)
  t.false(createWatchIgnoreRegex('./').test('build-figma-plugin.manifest.js'))
  t.false(createWatchIgnoreRegex('./').test('build-figma-plugin.main.js'))
  t.false(createWatchIgnoreRegex('./').test('build-figma-plugin.ui.js'))
  t.false(createWatchIgnoreRegex('./').test('package.json'))
  t.false(createWatchIgnoreRegex('./').test('tsconfig.json'))
  t.false(createWatchIgnoreRegex('./').test('src/data.json'))
  t.false(createWatchIgnoreRegex('./').test('src/main.js'))
  t.false(createWatchIgnoreRegex('./').test('src/styles.css'))
  t.false(createWatchIgnoreRegex('./').test('src/ui.tsx'))
})
