#!/usr/bin/env node

import sade from 'sade'
import { build } from './build'
import { watch } from './watch'

sade('create-figma-plugin-build', true)
  .option('-d, --dev', 'Build in development mode', false)
  .option('-w, --watch', 'Rebuild the plugin on changes', false)
  .action(async function ({ dev: isDevelopment, watch: isWatch }) {
    if (isWatch) {
      watch()
      return
    }
    await build(isDevelopment)
  })
  .parse(process.argv)
