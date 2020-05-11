#!/usr/bin/env node

import sade from 'sade'
import { buildAsync } from './build-async'
import { watch } from './watch'

sade('build-figma-plugin', true)
  .describe(
    'Build a Figma plugin, with support for multiple menu commands that each have their own UI implementation'
  )
  .option('-d, --dev', 'Create an unminified bundle with sourcemaps', false)
  .option('-w, --watch', 'Rebuild the plugin on code changes', false)
  .action(async function ({ dev: isDevelopment, watch: isWatch }) {
    if (isWatch === true) {
      watch()
      return
    }
    await buildAsync(isDevelopment, true)
  })
  .parse(process.argv)
