#!/usr/bin/env node
import * as sade from 'sade'

import { buildAsync } from './build-async'
import { watch } from './watch'

sade('build-figma-plugin', true)
  .describe(
    'Build a Figma plugin, with support for multiple menu commands that each have their own UI implementation'
  )
  .option('-m, --minify', 'Minify the plugin bundle', false)
  .option('-w, --watch', 'Rebuild the plugin on code changes', false)
  .action(async function (options: { minify: boolean; watch: boolean }) {
    await buildAsync(options.minify)
    if (options.watch === true) {
      watch(options.minify)
      return
    }
  })
  .parse(process.argv)
