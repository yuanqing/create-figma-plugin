const { join } = require('path')
const tempWrite = require('temp-write')
const { sourceDirectory } = require('./constants')

async function buildWebpackEntryFile (config) {
  const fileContent = await createWebpackEntryFileContent(config)
  return tempWrite(fileContent)
}

function createWebpackEntryFileContent (config) {
  const commands = filterCommands(config.menu)
  const requires = commands.map(function (command) {
    const requirePath = join(process.cwd(), sourceDirectory, command)
    return `'${command}': require('${requirePath}')`
  })
  return `({
    ${requires.join(',')}
  })[figma.command].default(figma)`
}

function filterCommands (menu) {
  const results = []
  menu.forEach(function (item) {
    if (item === '-') {
      return
    }
    results.push(item.command)
  })
  return results
}

module.exports = buildWebpackEntryFile
