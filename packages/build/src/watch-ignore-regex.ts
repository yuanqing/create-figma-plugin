import { constants } from '@create-figma-plugin/common'

export const watchIgnoreRegex = new RegExp(
  [
    '^coverage',
    '^node_modules',
    '^package-lock.json$',
    '.css.d.ts$',
    `^${constants.build.directoryName}`,
    `^${constants.build.manifestFilePath}$`
  ].join('|')
)
