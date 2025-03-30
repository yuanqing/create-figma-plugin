import fs from 'node:fs/promises'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import slugify from '@sindresorhus/slugify'
import camelcase from 'camelcase'
import { globby } from 'globby'
import { optimize } from 'svgo'

import { writeFileAsync } from '../../common/src/write-file-async.js'

type SvgFile = {
  baseName: string
  componentName: string
  dimension: number
  svgPath: string
}

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const globPattern = 'icons/*'
    const outputDirectoryPath = resolve(__dirname, '..', 'src', 'icons')
    await generateIconsAsync(globPattern, outputDirectoryPath)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function generateIconsAsync(
  globPattern: string,
  outputDirectoryPath: string
): Promise<void> {
  const directoryPaths = await globby(globPattern, { onlyFiles: false })
  if (directoryPaths.length === 0) {
    throw new Error(`No files match \`${globPattern}\``)
  }
  for (const directoryPath of directoryPaths) {
    const iconVersion = basename(directoryPath)
    const filePaths = await globby(join(directoryPath, '**/*.svg'))
    const svgFiles = await readSvgFilesAsync(filePaths)
    const dimensions: Record<string, Array<SvgFile>> = groupSvgFilesByDimension(
      svgFiles
    )
    const directoryPaths = await globby(
      join(outputDirectoryPath, iconVersion.toLowerCase(), 'icon-*'),
      {
        onlyFiles: false
      }
    )
    for (const directoryPath of directoryPaths) {
      await fs.rm(directoryPath, { force: true, recursive: true })
    }
    for (const dimension in dimensions) {
      const directoryPath = join(
        outputDirectoryPath,
        iconVersion.toLowerCase(),
        `icon-${dimension}`
      )
      await writePreactComponentsAsync(dimensions[dimension], directoryPath)
      await writeStoriesAsync(
        dimensions[dimension],
        iconVersion,
        dimension,
        directoryPath
      )
    }
  }
}

async function readSvgFilesAsync(
  filePaths: Array<string>
): Promise<Array<SvgFile>> {
  const result: Array<SvgFile> = []
  const usedNames: Record<string, true> = {}
  for (const filePath of filePaths.sort()) {
    const svgFile: SvgFile = await readSvgFileAsync(filePath)
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
  let width = 0
  let height = 0
  const result = optimize(svgString, {
    plugins: [
      {
        fn: function () {
          return {
            element: {
              enter: (node, parentNode) => {
                if (parentNode.type === 'root') {
                  width = parseInt(node.attributes.width, 10)
                  height = parseInt(node.attributes.height, 10)
                }
              }
            }
          }
        },
        name: 'get-svg-size'
      },
      {
        name: 'convertPathData',
        params: {
          floatPrecision: 5
        }
      }
    ]
  })
  if (width === null) {
    throw new Error('`width` is `null`')
  }
  if (height === null) {
    throw new Error('`height` is `null`')
  }
  if (width !== height) {
    throw new Error(`Different \`width\` and \`height\`: ${filePath}`)
  }
  const optimizedSvgString = result.data
  return {
    baseName: slugify(`icon-${baseName}-${width}`),
    componentName: camelcase(`Icon ${baseName} ${width}`, {
      pascalCase: true
    }),
    dimension: width,
    svgPath: extractSvgPath(optimizedSvgString, filePath)
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
    const fileContents = `import { createIcon } from '../../create-icon.js'

export const ${componentName} = createIcon(
  '${svgPath}',
  { height: ${dimension}, width: ${dimension} }
)
`
    const filePath = join(directoryPath, `${baseName}.ts`)
    await writeTsFileAsync(filePath, fileContents)
  }
}

async function writeStoriesAsync(
  svgFiles: Array<SvgFile>,
  iconVersion: string,
  dimension: string,
  directoryPath: string
): Promise<void> {
  const imports: Array<string> = []
  const stories: Array<string> = []
  for (const { baseName, componentName } of svgFiles) {
    imports.push(`import { ${componentName} } from '../${baseName}.js'`)
    stories.push(`export const ${componentName
      .replace(/^Icon/, '')
      .replace(/\d+$/, '')} = function () {
  return <${componentName} />
}`)
  }
  const fileContents = `import { h } from 'preact'

${imports.join('\n')}

export default {
  parameters: {
    fixedWidth: false
  },
  title: 'Icons/${iconVersion}/Size ${dimension}'
}

${stories.join('\n\n')}
`
  const filePath = join(
    directoryPath,
    'stories',
    `icon-${dimension}.stories.tsx`
  )
  await writeTsFileAsync(filePath, fileContents)
}

async function writeTsFileAsync(
  filePath: string,
  fileContents: string
): Promise<void> {
  await writeFileAsync(
    filePath,
    `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n${fileContents}`
  )
}
