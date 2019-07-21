import { readFile } from 'fs-extra'
import { join } from 'path'
import tempWrite from 'temp-write'
import webpack from 'webpack'
import { constants } from '@create-figma-plugin/common'
import { createWebpackConfig } from './create-webpack-config'

export async function buildBundle (
  commands,
  moduleKey,
  entryFileTemplatePath,
  outputConfig,
  isDevelopment
) {
  const __REQUIRES__ = createRequireCode(commands, moduleKey)
  if (__REQUIRES__ === null) {
    return Promise.resolve(false)
  }
  const __COMMAND__ = commands.length > 1 ? 'figma.command' : `'${commands[0]}'`
  const entryFilePath = await buildWebpackEntryFile(
    entryFileTemplatePath,
    __REQUIRES__,
    __COMMAND__
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
      resolve(true)
    })
  })
}

function createRequireCode (commands, moduleKey) {
  const imports = []
  const object = []
  commands.forEach(function (command, index) {
    const requirePath = join(process.cwd(), constants.sourceDirectory, command)
    if (require(requirePath)[moduleKey] == null) {
      return
    }
    const alias = `x${index}`
    imports.push(`import { ${moduleKey} as ${alias} } from '${requirePath}';`)
    object.push(`'${command}': ${alias}`)
  })
  if (imports.length === 0) {
    return null
  }
  return `
    ${imports.join('')}
    const __requires__ = {
      ${object.join(',')}
    };
  `
}

async function buildWebpackEntryFile (
  entryFileTemplatePath,
  __REQUIRES__,
  __COMMAND__
) {
  const entryFileTemplate = await readFile(entryFileTemplatePath, 'utf8')
  const fileContent = entryFileTemplate
    .replace(/__REQUIRES__/g, __REQUIRES__)
    .replace(/__COMMAND__/g, __COMMAND__)
  return tempWrite(fileContent)
}
