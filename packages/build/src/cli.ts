#!/usr/bin/env node
import { log } from '@create-figma-plugin/common'
import sade from 'sade'

import { buildAsync } from './build-async.js'
import { BuildOptions } from './types/build.js'
import { watchAsync } from './watch-async/watch-async.js'

sade('build-figma-plugin', true)
  .describe('Build a Figma plugin')
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
