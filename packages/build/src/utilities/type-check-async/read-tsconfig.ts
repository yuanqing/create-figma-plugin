import fs from 'fs'
import { dirname } from 'path'
import ts from 'typescript'

import { formatTypeScriptErrorMessage } from './format-typescript-error-message.js'

const parseConfigHost: ts.ParseConfigHost = {
  fileExists: ts.sys.fileExists,
  readDirectory: ts.sys.readDirectory,
  readFile: ts.sys.readFile,
  useCaseSensitiveFileNames: true
}

export function readTsConfig(tsConfigFilePath: string): {
  compilerOptions: ts.CompilerOptions
  filePaths: Array<string>
} {
  const jsonConfigFile = ts.readJsonConfigFile(
    tsConfigFilePath,
    function (path: string) {
      return fs.readFileSync(path, 'utf8')
    }
  )
  const result = ts.parseJsonSourceFileConfigFileContent(
    jsonConfigFile,
    parseConfigHost,
    dirname(tsConfigFilePath)
  )
  if (result.errors.length > 0) {
    throw new Error(formatTypeScriptErrorMessage(result.errors))
  }
  return { compilerOptions: result.options, filePaths: result.fileNames }
}
