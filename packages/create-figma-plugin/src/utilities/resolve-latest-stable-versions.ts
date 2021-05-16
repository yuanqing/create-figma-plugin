import packageJson from 'package-json'
import semver from 'semver'

import { CreateFigmaPluginVersions } from '../types/create-figma-plugin-versions.js'

export async function resolveLatestStableVersions(): Promise<CreateFigmaPluginVersions> {
  return {
    build: await resolveLatestStableVersion('@create-figma-plugin/build'),
    tsconfig: await resolveLatestStableVersion('@create-figma-plugin/tsconfig'),
    ui: await resolveLatestStableVersion('@create-figma-plugin/ui'),
    utilities: await resolveLatestStableVersion(
      '@create-figma-plugin/utilities'
    )
  }
}

async function resolveLatestStableVersion(
  packageName: string
): Promise<string> {
  const result = await packageJson(packageName, { allVersions: true })
  const versions = Object.keys(result.versions).sort(function (
    a: string,
    b: string
  ): number {
    return b.localeCompare(a, [], { numeric: true }) // sort in reverse alphabetical order
  })
  if (versions.length === 0) {
    throw new Error('No versions')
  }
  for (const version of versions) {
    const parsed = semver.parse(version)
    if (parsed === null) {
      throw new Error(`Invalid version: ${version}`)
    }
    if (parsed.prerelease.length === 0) {
      return version
    }
  }
  return versions[0]
}
