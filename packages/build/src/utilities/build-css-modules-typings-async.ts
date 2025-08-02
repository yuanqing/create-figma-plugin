import { exec, ExecException } from 'node:child_process'
import fs from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { constants, writeFileAsync } from '@create-figma-plugin/common'
import { findUp } from 'find-up'
import { globby } from 'globby'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function buildCssModulesTypingsAsync(
  esmModule: boolean
): Promise<void> {
  const tcm = await findUp(
    join('node_modules', 'typed-css-modules', 'lib', 'cli.js'),
    { cwd: __dirname }
  )
  if (typeof tcm === 'undefined') {
    throw new Error('Cannot find `tcm`')
  }
  await new Promise<void>(function (resolve, reject) {
    exec(
      `node "${tcm}" ${esmModule === true ? '--allowArbitraryExtensions ' : ''} ${constants.build.srcDirectoryName}`,
      function (error: null | ExecException) {
        if (error !== null) {
          reject(error)
          return
        }
        resolve()
      }
    )
  })
  if (esmModule === true) {
    await patchExportSyntaxAsync()
  }
}

async function patchExportSyntaxAsync() {
  const typingsFilePaths = await globby(
    join(constants.build.srcDirectoryName, '**', '*.d.css.ts')
  )
  for (const typingsFilePath of typingsFilePaths) {
    const contents = await fs.readFile(typingsFilePath, 'utf8')
    const result = contents.replace(
      'export = styles;',
      'export default styles;'
    )
    await writeFileAsync(typingsFilePath, result)
  }
}
