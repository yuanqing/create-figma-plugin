#!/usr/bin/env node
import sade from 'sade'

import { buildAsync } from './build-async.js'
import { BuildOptions } from './types/build.js'
import { watch } from './watch/watch.js'

sade('build-figma-plugin', true)
  .describe(
    'Build a Figma plugin, with support for multiple menu commands that each have their own UI implementation'
  )
  .option('-m, --minify', 'Minify the plugin bundle', false)
  .option('-t, --typecheck', 'Type check the plugin code before build', false)
  .option('-w, --watch', 'Rebuild the plugin on code changes', false)
  .action(async function (options: {
    minify: boolean
    typecheck: boolean
    watch: boolean
  }): Promise<void> {
    const buildOptions: BuildOptions = {
      minify: options.minify,
      typecheck: options.typecheck
    }
    await buildAsync(buildOptions)
    if (options.watch === true) {
      watch(buildOptions)
      return
    }
  })
  .parse(process.argv)
