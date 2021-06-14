#!/usr/bin/env node
import { log } from '@create-figma-plugin/common'
import sade from 'sade'

import { buildAsync } from './build-async.js'
import { BuildOptions } from './types/build.js'
import { watchAsync } from './watch-async/watch-async.js'

sade('build-figma-plugin', true)
  .describe('Build a Figma plugin')
  .option('-m, --minify', 'Minify the plugin bundle', false)
  .option(
    '--main-config',
    'Path to a JavaScript file for customizing the esbuild config for generating the plugin’s main bundle',
    ''
  )
  .option('-t, --typecheck', 'Type check the plugin code before build', false)
  .option(
    '--ui-config',
    'Path to a JavaScript file for customizing the esbuild config for generating the plugin’s UI bundle',
    ''
  )
  .option('-w, --watch', 'Rebuild the plugin on code changes', false)
  .action(async function (options: {
    minify: boolean
    typecheck: boolean
    watch: boolean
    ['main-config']: string
    ['ui-config']: string
  }): Promise<void> {
    const buildOptions: BuildOptions = {
      mainConfigFilePath:
        options['main-config'] === '' ? null : options['main-config'],
      minify: options.minify,
      typecheck: options.typecheck,
      uiConfigFilePath:
        options['ui-config'] === '' ? null : options['ui-config']
    }
    if (options.watch === true) {
      log.clearViewport()
      await buildAsync({
        ...buildOptions,
        clearPreviousLine: true,
        typecheck: false
      })
      await watchAsync(buildOptions)
      return
    }
    await buildAsync({ ...buildOptions, clearPreviousLine: false })
  })
  .parse(process.argv)
