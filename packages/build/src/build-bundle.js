const { constants } = require('@create-figma-plugin/common')
const { readFile } = require('fs-extra')
const { join } = require('path')
const tempWrite = require('temp-write')
const webpack = require('webpack')
const createWebpackConfig = require('./create-webpack-config')

async function buildBundle (
  commands,
  moduleKey,
  entryFileTemplatePath,
  outputConfig,
  isDevelopment
) {
  const requires = createRequireCode(commands, moduleKey)
  const entryFilePath = await buildWebpackEntryFile(
    entryFileTemplatePath,
    requires
  )
  const webpackConfig = createWebpackConfig(
    entryFilePath,
    outputConfig,
    isDevelopment
  )
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, async function (error, stats) {
      if (stats.hasErrors()) {
        reject(stats.toJson().errors.join('\n'))
        return
      }
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

function createRequireCode (commands, moduleKey) {
  const imports = []
  const object = []
  commands.forEach(function (command, index) {
    const requirePath = join(process.cwd(), constants.sourceDirectory, command)
    const alias = `x${index}`
    imports.push(`import { ${moduleKey} as ${alias} } from '${requirePath}';`)
    object.push(`'${command}': ${alias}`)
  })
  return `
    ${imports.join('')}
    const __requires__ = {
      ${object.join(',')}
    };
  `
}

async function buildWebpackEntryFile (entryFileTemplatePath, requires) {
  const entryFileTemplate = await readFile(entryFileTemplatePath, 'utf8')
  const fileContent = `${requires}${entryFileTemplate}`
  return tempWrite(fileContent)
}

module.exports = buildBundle
