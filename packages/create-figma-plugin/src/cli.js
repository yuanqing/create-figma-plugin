#!/usr/bin/env node

import sade from 'sade'
import { createFigmaPluginAsync } from './create-figma-plugin-async'

sade('create-figma-plugin [name]', true)
  .option('-t, --template', 'Use a template')
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes: useDefault, template }) {
    await createFigmaPluginAsync({ name, template }, useDefault)
  })
  .parse(process.argv)
