#!/usr/bin/env node
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma plugin using a template')
  .option(
    '-t, --template',
    'Pass in the URL of a GitHub repository to use as a template'
  )
  .option('-y, --yes', 'Use defaults')
  .action(async function (
    name: string,
    options: { yes: boolean; template: string }
  ) {
    const { yes, template } = options
    await createFigmaPluginAsync({ name, template }, yes)
  })
  .parse(process.argv)
