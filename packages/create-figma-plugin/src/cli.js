#!/usr/bin/env node

import sade from 'sade'
import { createFigmaPluginAsync } from './create-figma-plugin-async'
import packageJson from '../package.json'

sade('create-figma-plugin [name]', true)
  .describe(packageJson.description)
  .option(
    '-t, --template',
    'Pass in the URL of a GitHub repository to use as a template'
  )
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes: useDefault, template }) {
    await createFigmaPluginAsync({ name, template }, useDefault)
  })
  .parse(process.argv)
