import { readFile } from 'fs-extra'
import { join } from 'path'
import tempWrite from 'temp-write'
import { constants } from '@create-figma-plugin/common'

export async function buildWebpackEntryFile (menu, key, entryFileTemplatePath) {
  const modules = extractModules(menu, key)
  if (modules.length === 0) {
    return Promise.resolve(null)
  }
  const code = [
    `this.__requires__=${createRequireCode(modules)};`,
    `this.__command__=${
      modules.length > 1 ? 'figma.command' : `'${modules[0].id}'`
    };`
  ]
  const entryFileTemplate = await readFile(entryFileTemplatePath, 'utf8')
  return tempWrite(code.join('') + entryFileTemplate)
}

function extractModules (menu, key) {
  const modules = []
  menu.forEach(function (item) {
    if (item.command && item[key]) {
      modules.push({
        id: item.command,
        src: item[key]
      })
    }
  })
  return modules
}

function createRequireCode (modules) {
  const code = []
  modules.forEach(function (item) {
    const requirePath = join(process.cwd(), constants.src.directory, item.src)
    if (require(requirePath) == null) {
      return
    }
    code.push(`'${item.id}':require('${requirePath}').default`)
  })
  return `{${code.join(',')}}`
}
