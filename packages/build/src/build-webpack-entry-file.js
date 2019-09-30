import tempWrite from 'temp-write'

export async function buildWebpackEntryFile (config, key, code) {
  const modules = extractModules(config, key, [])
  if (modules.length === 0) {
    return Promise.resolve(null)
  }
  // prettier-ignore
  return tempWrite(`
    const modules = ${createRequireCode(modules)};
    const command = ${modules.length > 1 ? 'figma.command' : `'${modules[0].id}'`};
    ${code}
  `)
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
