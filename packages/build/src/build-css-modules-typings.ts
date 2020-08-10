import { constants } from '@create-figma-plugin/common'
import * as globby from 'globby'
import DtsCreator from 'typed-css-modules'

export async function buildCssModulesTypings(): Promise<void> {
  const filePaths = await globby(`${constants.src.directory}/**/*.{css,scss}`)
  const creator = new DtsCreator()
  await Promise.all(
    filePaths.map(async function (filePath) {
      const content = await creator.create(filePath)
      await content.writeFile()
    })
  )
}
