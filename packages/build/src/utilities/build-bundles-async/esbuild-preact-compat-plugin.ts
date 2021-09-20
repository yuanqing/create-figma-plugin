// Adapted from https://github.com/colmtuite/icons-figma/blob/c671c209915a4cc55bd788fdfd47131dc1d53886/build-figma-plugin.ui.js by Tekeste Kidanu (https://github.com/iamtekeste)

import { Plugin, PluginBuild } from 'esbuild'
import { findUp } from 'find-up'
import { join } from 'path'

export function esbuildPreactCompatPlugin(): Plugin {
  return {
    name: 'preact-compat',
    setup: function (build: PluginBuild): void {
      build.onResolve(
        { filter: /^react(?:-dom)?$/ },
        async function (): Promise<{
          path: string
        }> {
          const preactCompatPath = await findUp(
            join('node_modules', 'preact', 'compat', 'dist', 'compat.module.js')
          )
          if (typeof preactCompatPath === 'undefined') {
            throw new Error('Cannot find `preact`')
          }
          return { path: preactCompatPath }
        }
      )
    }
  }
}
