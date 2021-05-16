import { log } from '@create-figma-plugin/common'
import tempy from 'tempy'
import ts from 'typescript'

import { formatTypeScriptErrorMessage } from './format-typescript-error-message.js'
import { readTsConfig } from './read-tsconfig.js'

export async function typeCheckAsync(watch: boolean): Promise<void> {
  const tsConfigFilePath = ts.findConfigFile(
    process.cwd(),
    ts.sys.fileExists,
    'tsconfig.json'
  )
  if (typeof tsConfigFilePath === 'undefined') {
    throw new Error('Need a `tsconfig.json`')
  }
  const tsConfig = readTsConfig(tsConfigFilePath)
  const compilerOptions = {
    ...tsConfig.compilerOptions,
    configFilePath: tsConfigFilePath,
    noEmit: true
  }
  if (watch === true) {
    typeCheckWatch(tsConfigFilePath, compilerOptions)
    return
  }
  await typeCheckBuildAsync(tsConfig.filePaths, compilerOptions)
}

async function typeCheckBuildAsync(
  filePaths: Array<string>,
  compilerOptions: ts.CompilerOptions
): Promise<void> {
  if (filePaths.length === 0) {
    return
  }
  const program = ts.createProgram(filePaths, compilerOptions)
  const diagnostics = ts.getPreEmitDiagnostics(program)
  if (diagnostics.length === 0) {
    return
  }
  throw new Error(formatTypeScriptErrorMessage(diagnostics))
}

function typeCheckWatch(
  tsConfigFilePath: string,
  compilerOptions: ts.CompilerOptions
): void {
  const host = ts.createWatchCompilerHost(
    tsConfigFilePath,
    {
      ...compilerOptions,
      incremental: true,
      tsBuildInfoFile: tempy.file()
    },
    ts.sys,
    ts.createSemanticDiagnosticsBuilderProgram,
    function reportDiagnostic(diagnostic: ts.Diagnostic) {
      log.error(formatTypeScriptErrorMessage([diagnostic]))
    },
    function reportWatchStatus() {} // no-op
  )
  ts.createWatchProgram(host)
}
