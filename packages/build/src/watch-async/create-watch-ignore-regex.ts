import { constants } from '@create-figma-plugin/common'

export function createWatchIgnoreRegex(outputDirectoryPath: string) {
  return new RegExp(
    [
      `^${outputDirectoryPath}`,
      '^.git',
      '^node_modules',
      '^manifest.json$',
      '^package-lock.json$',
      `^${constants.build.buildDirectoryName}/`,
      '.css.d.ts$'
    ].join('|')
  )
}
