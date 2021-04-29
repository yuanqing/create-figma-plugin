import { constants } from '@create-figma-plugin/common'

export const watchIgnoreRegex = new RegExp(
  [
    '^node_modules',
    '^manifest.json$',
    '^package-lock.json$',
    '.css.d.ts$',
    `^${constants.build.directoryName}`
  ].join('|')
)
