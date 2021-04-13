import latestVersion from 'latest-version'

import type { CreateFigmaPluginVersions } from './types/create-figma-plugin-versions'

export async function resolveLatestVersions(): Promise<CreateFigmaPluginVersions> {
  return {
    build: await latestVersion('@create-figma-plugin/build'),
    tsconfig: await latestVersion('@create-figma-plugin/tsconfig'),
    utilities: await latestVersion('@create-figma-plugin/utilities')
  }
}
