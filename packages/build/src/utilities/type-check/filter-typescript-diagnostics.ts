import ts from 'typescript'

export function filterTypeScriptDiagnostics(
  diagnostics: Array<ts.Diagnostic>
): Array<ts.Diagnostic> {
  return diagnostics.filter(function (diagnostic: ts.Diagnostic): boolean {
    // The `console` and `fetch` globals defined in `@figma/plugin-typings`
    // clashes with the `console` and `fetch` globals defined by the `dom`
    // and `@types/nodes` libraries. We suppress this specific error when type-checking.
    if (typeof diagnostic.file === 'undefined') {
      return true
    }
    const fileName = diagnostic.file.fileName
    if (
      fileName.indexOf('typescript/lib/lib.dom.d.ts') === -1 &&
      fileName.indexOf('@figma/plugin-typings/index.d.ts') === -1 &&
      fileName.indexOf('@types/node/globals.d.ts') === -1
    ) {
      return true
    }
    const { code, messageText } = diagnostic
    if (
      code === 2451 &&
      messageText !== "Cannot redeclare block-scoped variable 'console'." &&
      messageText !== "Cannot redeclare block-scoped variable 'fetch'."
    ) {
      return true
    }
    if (
      code === 2649 &&
      messageText !==
        "Cannot augment module 'console' with value exports because it resolves to a non-module entity."
    ) {
      return true
    }
    return false
  })
}
