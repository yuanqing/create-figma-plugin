#!/usr/bin/env node

import sade from 'sade'
import { buildAsync } from './build-async'
import { watch } from './watch'
import packageJson from '../package.json'

sade('build-figma-plugin', true)
  .describe(packageJson.description)
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
