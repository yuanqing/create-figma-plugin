import { log } from '@create-figma-plugin/common'
import { temporaryFile } from 'tempy'
import ts from 'typescript'

import { trackElapsedTime } from '../track-elapsed-time.js'
import { filterTypeScriptDiagnostics } from './filter-typescript-diagnostics.js'
import { formatTypeScriptErrorMessage } from './format-typescript-error-message.js'
import { readTsConfig } from './read-tsconfig.js'

export function typeCheckWatch(): () => void {
  const tsConfig = readTsConfig()
  const compilerOptions = {
    ...tsConfig.compilerOptions,
    configFilePath: tsConfig.tsConfigFilePath,
    noEmit: true
  }
  let getElapsedTime: () => string
  const host = ts.createWatchCompilerHost(
    tsConfig.tsConfigFilePath,
    {
      ...compilerOptions,
      incremental: true,
      tsBuildInfoFile: temporaryFile()
    },
    ts.sys,
    ts.createSemanticDiagnosticsBuilderProgram,
    function reportDiagnostic(diagnostic: ts.Diagnostic) {
      const diagnostics = filterTypeScriptDiagnostics([diagnostic])
      if (diagnostics.length === 0) {
        return
      }
      log.error(formatTypeScriptErrorMessage(diagnostics))
    },
    function reportWatchStatus(diagnostic: ts.Diagnostic) {
      if (
        diagnostic.code === 6031 || // 'Starting compilation in watch mode...'
        diagnostic.code === 6032 // 'File change detected. Starting incremental compilation...'
      ) {
        getElapsedTime = trackElapsedTime()
        log.info('Typechecking...')
        return
      }
      if (diagnostic.code === 6194) {
        // 'Found 0 errors. Watching for file changes.'
        log.success(`Typechecked in ${getElapsedTime()}`, {
          clearPreviousLine: true
        })
        log.info('Watching...')
        return
      }
    }
  )
  const watchProgram = ts.createWatchProgram(host)
  return function (): void {
    watchProgram.close()
  }
}
