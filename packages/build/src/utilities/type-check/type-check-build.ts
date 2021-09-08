import ts from 'typescript'

import { filterTypeScriptDiagnostics } from './filter-typescript-diagnostics.js'
import { formatTypeScriptErrorMessage } from './format-typescript-error-message.js'
import { readTsConfig } from './read-tsconfig.js'

export function typeCheckBuild(): void {
  const tsConfig = readTsConfig()
  const compilerOptions = {
    ...tsConfig.compilerOptions,
    configFilePath: tsConfig.tsConfigFilePath,
    noEmit: true
  }
  if (tsConfig.filePaths.length === 0) {
    return
  }
  const program = ts.createProgram(tsConfig.filePaths, compilerOptions)
  const diagnostics = filterTypeScriptDiagnostics(
    ts.getPreEmitDiagnostics(program).slice()
  )
  if (diagnostics.length === 0) {
    return
  }
  throw new Error(formatTypeScriptErrorMessage(diagnostics))
}
