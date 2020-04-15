#!/usr/bin/env node

import sade from 'sade'
import { buildAsync } from './build-async'
import { watch } from './watch'

sade('build-figma-plugin', true)
  .option('-d, --dev', 'Build in development mode', false)
  .option('-w, --watch', 'Rebuild the plugin on changes', false)
  .action(async function ({ dev: isDevelopment, watch: isWatch }) {
    if (isWatch === true) {
      watch()
      return
    }
    await buildAsync(isDevelopment, true)
  })
  .parse(process.argv)
