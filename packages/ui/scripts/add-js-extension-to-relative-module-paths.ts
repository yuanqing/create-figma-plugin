import fs from 'fs-extra'
import globby from 'globby'
import { extname } from 'path'
import ts from 'typescript'

const relativePathRegex = /^\.\.?\// // Starts with either `./` or `../`

async function main() {
  const args = process.argv.slice(2) // File paths are passed in as CLI arguments
  const filePaths = await globby(args)
  const result: Record<string, string> = {} // Map each file path to their new contents
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const program = ts.createProgram(filePaths, { allowJs: true })
  for (const filePath of filePaths) {
    const sourceFile = program.getSourceFile(filePath)
    if (typeof sourceFile === 'undefined') {
      throw new Error(`\`sourceFile\` is \`undefined\`: ${filePath}`)
    }
    const nodes: Array<ts.Node> = []
    ts.forEachChild(sourceFile, function (node: ts.Node): void {
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
        if (typeof node.moduleSpecifier === 'undefined') {
          return
        }
        if (ts.isStringLiteral(node.moduleSpecifier)) {
          const modulePath = node.moduleSpecifier.text
          if (relativePathRegex.test(modulePath) === true) {
            // Only add a `.js` suffix if `importPath` does not already have any extension
            if (extname(modulePath) === '') {
              node.moduleSpecifier.text = `${modulePath}.js`
            }
          }
        }
      }
      nodes.push(node)
    })
    const stringifiedResult: Array<string> = []
    for (const node of nodes) {
      stringifiedResult.push(
        printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
      )
    }
    result[filePath] = stringifiedResult.join('\n')
  }
  // Commit result to disk only if there are no errors across all files
  for (const filePath in result) {
    await fs.outputFile(filePath, result[filePath])
  }
}
main()
