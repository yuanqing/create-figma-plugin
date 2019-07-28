import test from 'ava'
import { exists } from 'fs-extra'
import { join } from 'path'
import rimraf from 'rimraf'
import { createFigmaPlugin } from '../create-figma-plugin'

function changeDirectory (directory) {
  process.chdir(join(__dirname, '__fixtures__', directory))
}

async function cleanUp () {
  return new Promise(function (resolve, reject) {
    rimraf(join(process.cwd(), 'figma-plugin'), function (error) {
      if (error) {
        return reject(error)
      }
      resolve()
    })
  })
}
test.afterEach.always(cleanUp)

test('use default', async function (t) {
  t.plan(4)
  changeDirectory('1-use-default')
  await cleanUp()
  await createFigmaPlugin({}, true)
  t.true(await exists('figma-plugin'))
  t.true(await exists('figma-plugin/index.js'))
  t.true(await exists('figma-plugin/node_modules'))
  t.true(await exists('figma-plugin/package.json'))
})
