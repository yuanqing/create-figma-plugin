import test from 'ava'
import { exists } from 'fs-extra'
import { join } from 'path'
import rimraf from 'rimraf'
import { createFigmaPluginAsync } from '../src/create-figma-plugin-async'

function changeDirectory (directory) {
  process.chdir(join(__dirname, 'fixtures', directory))
}

async function cleanUpAsync () {
  return new Promise(function (resolve, reject) {
    rimraf(join(process.cwd(), 'figma-plugin'), function (error) {
      if (error) {
        return reject(error)
      }
      resolve()
    })
  })
}
test.afterEach.always(cleanUpAsync)

test('use default', async function (t) {
  t.plan(7)
  changeDirectory('1-use-default')
  await cleanUpAsync()
  t.false(await exists('figma-plugin'))
  await createFigmaPluginAsync({}, true)
  t.true(await exists('figma-plugin'))
  t.true(await exists('figma-plugin/.gitignore'))
  t.true(await exists('figma-plugin/node_modules'))
  t.true(await exists('figma-plugin/package.json'))
  t.true(await exists('figma-plugin/README.md'))
  t.true(await exists('figma-plugin/src/main.js'))
})
