import { exists, readFile } from 'fs-extra'
import { join } from 'path'
import tempWrite from 'temp-write'
import { constants } from '@create-figma-plugin/common'

export async function buildWebpackEntryFile (
  config,
  key,
  entryFileTemplatePath
) {
  const modules = extractModules(config, key, [])
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

function extractModules (config, key, result) {
  const src = config[key]
  if (src) {
    const id = config.command
    if (id) {
      result.push({
        id,
        src
      })
    }
  }
  const menu = config.menu
  if (menu) {
    menu.forEach(function (item) {
      extractModules(item, key, result)
    })
  }
  return result
}

function createRequireCode (modules) {
  const code = []
  modules.forEach(function (item) {
    code.push(`'${item.id}':require('${item.src}').default`)
  })
  return `{${code.join(',')}}`
}
