#!/usr/bin/env node
import { log } from '@create-figma-plugin/common'
import sade from 'sade'

import { buildAsync } from './build-async.js'
import { BuildOptions } from './types/build.js'
import { watchAsync } from './watch-async/watch-async.js'

sade('build-figma-plugin', true)
  .describe('Build a Figma/FigJam plugin/widget')
  .option('-m, --minify', 'Minify the plugin/widget bundles', false)
  .option('-o, --output', 'Directory to output the plugin/widget bundles', null)
  .option('-t, --typecheck', 'Typecheck the plugin/widget source code', false)
  .option(
    '-w, --watch',
    'Automatically rebuild the plugin/widget on code changes',
    false
  )
  .action(async function (options: {
    minify: boolean
    output: null | string
    typecheck: boolean
    watch: boolean
  }): Promise<void> {
    const buildOptions: BuildOptions = {
      minify: options.minify === true,
      outputDirectory: options.output === null ? process.cwd() : options.output,
      typecheck: options.typecheck === true
    }
    if (options.watch === true) {
      log.clearViewport()
      await buildAsync({
        ...buildOptions,
        clearPreviousLine: true,
        exitOnError: false,
        typecheck: false
      })
      await watchAsync(buildOptions)
      return
    }
    await buildAsync({
      ...buildOptions,
      clearPreviousLine: false,
      exitOnError: true
    })
  })
  .parse(process.argv)
