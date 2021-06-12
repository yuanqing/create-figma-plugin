import { paramCase, pascalCase, pascalCaseTransformMerge } from 'change-case'
import fs from 'fs-extra'
import globby from 'globby'
import { basename, dirname, extname, join, resolve } from 'path'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'

type SvgFile = {
  dimension: number
  componentName: string
  baseName: string
  svgPath: string
}

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const globPatterns = ['icons/**/*.svg']
    const iconDirectoryPath = resolve(
      __dirname,
      '..',
      'src',
      'components',
      'icon'
    )
    await generateIconsTs(globPatterns, iconDirectoryPath)
  } catch (error) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function generateIconsTs(
  globPatterns: Array<string>,
  outputDirectoryPath: string
): Promise<void> {
  const filePaths = await globby(globPatterns)
  if (filePaths.length === 0) {
    throw new Error(`No files match \`${globPatterns.join(', ')}\``)
  }
  const svgFiles = await readSvgFilesAsync(filePaths)
  const dimensions: Record<string, Array<SvgFile>> = groupSvgFilesByDimension(
    svgFiles
  )
  const directoryPaths = await globby(join(outputDirectoryPath, 'icon-*'), {
    onlyFiles: false
  })
  for (const directoryPath of directoryPaths) {
    await fs.remove(directoryPath)
  }
  for (const dimension in dimensions) {
    const directoryPath = join(outputDirectoryPath, `icon-${dimension}`)
    await writePreactComponentsAsync(dimensions[dimension], directoryPath)
    await writeStoriesAsync(dimensions[dimension], dimension, directoryPath)
  }
}

async function readSvgFilesAsync(
  filePaths: Array<string>
): Promise<Array<SvgFile>> {
  const result: Array<SvgFile> = []
  const usedNames: Record<string, true> = {}
  for (const filePath of filePaths.sort()) {
    const svgFile = await readSvgFileAsync(filePath)
    const { componentName } = svgFile
    if (usedNames[componentName] === true) {
      throw new Error(`Name clash \`${componentName}\`: ${filePath}`)
    }
    usedNames[componentName] = true
    result.push(svgFile)
  }
  return result
}

async function readSvgFileAsync(filePath: string): Promise<SvgFile> {
  const baseName = basename(filePath, extname(filePath))
  const svgString = await fs.readFile(filePath, 'utf8')
  const result = optimize(svgString, {
    plugins: [
      {
        name: 'convertPathData',
        params: {
          floatPrecision: 5
        }
      }
    ]
  })
  const { width, height } = result.info
  if (width !== height) {
    throw new Error(`Different \`width\` and \`height\`: ${filePath}`)
  }
  const dimension = parseInt(result.info.width, 10)
  return {
    baseName: paramCase(`icon-${baseName}-${dimension}`),
    componentName: pascalCase(`Icon ${baseName} ${dimension}`, {
      transform: pascalCaseTransformMerge
    }),
    dimension,
    svgPath: extractSvgPath(result.data, filePath)
  }
}

function extractSvgPath(svgString: string, filePath: string): string {
  const result: Array<string> = []
  const matches = svgString.matchAll(/ d="([^"]+)"/g)
  for (const match of matches) {
    result.push(match[1])
  }
  if (result.length === 0) {
    throw new Error(`No paths in ${filePath}`)
  }
  if (result.length > 1) {
    throw new Error(`More than 1 \`path\` in ${filePath}`)
  }
  return result[0]
}

function groupSvgFilesByDimension(
  svgFiles: Array<SvgFile>
): Record<string, Array<SvgFile>> {
  const result: Record<string, Array<SvgFile>> = {}
  for (const svgFile of svgFiles) {
    const dimension = `${svgFile.dimension}`
    if (typeof result[dimension] === 'undefined') {
      result[dimension] = []
    }
    result[dimension].push(svgFile)
  }
  return result
}

async function writePreactComponentsAsync(
  svgFiles: Array<SvgFile>,
  directoryPath: string
): Promise<void> {
  for (const { baseName, componentName, svgPath, dimension } of svgFiles) {
    const fileContents = `import { createIcon } from '../create-icon.js'

export const ${componentName} = createIcon(
  '${svgPath}',
  { height: ${dimension}, width: ${dimension} }
)
`
    const filePath = join(directoryPath, `${baseName}.ts`)
    await writeFileAsync(filePath, fileContents)
  }
}

async function writeStoriesAsync(
  svgFiles: Array<SvgFile>,
  dimension: string,
  directoryPath: string
): Promise<void> {
  const imports = []
  const stories = []
  for (const { baseName, componentName } of svgFiles) {
    imports.push(`import { ${componentName} } from './${baseName}'`)
    stories.push(`export const ${componentName
      .replace(/^Icon/, '')
      .replace(/\d+$/, '')} = function () {
  return <${componentName} />
}`)
  }
  const fileContents = `/** @jsx h */
import { h } from 'preact'

${imports.join('\n')}

export default { title: 'Components/Icon/Size ${dimension}' }

${stories.join('\n\n')}
`
  const filePath = join(directoryPath, `icon-${dimension}.stories.tsx`)
  await writeFileAsync(filePath, fileContents)
}

async function writeFileAsync(
  filePath: string,
  fileContents: string
): Promise<void> {
  await fs.outputFile(
    filePath,
    `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n${fileContents}`
  )
}
