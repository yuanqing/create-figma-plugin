import fs from 'node:fs/promises'
import { join } from 'node:path'

import test from 'ava'
import { globby } from 'globby'
import { temporaryDirectoryTask } from 'tempy'

import { cssModulesTypingsGlob } from '../../src/utilities/build-css-modules-typings-async.js'

test('does not contain backslashes', function (t) {
  t.plan(1)
  t.false(cssModulesTypingsGlob('src').includes('\\'))
})

test('matches nested `.d.css.ts` files', async function (t) {
  t.plan(1)
  await temporaryDirectoryTask(async function (directory) {
    await fs.mkdir(join(directory, 'src', 'nested'), { recursive: true })
    await fs.writeFile(join(directory, 'src', 'a.d.css.ts'), '')
    await fs.writeFile(join(directory, 'src', 'nested', 'b.d.css.ts'), '')
    await fs.writeFile(join(directory, 'src', 'nested', 'c.css.ts'), '')
    const result = await globby(cssModulesTypingsGlob('src'), {
      cwd: directory
    })
    t.deepEqual(result.sort(), ['src/a.d.css.ts', 'src/nested/b.d.css.ts'])
  })
})
