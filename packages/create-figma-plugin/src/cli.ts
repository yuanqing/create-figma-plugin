#!/usr/bin/env node
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async.js'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma plugin using a template')
  .option(
    '-t, --template',
    'Pass in the URL of a GitHub repository to use as a template'
  )
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (
    name: undefined | string,
    options: { yes: boolean; template?: string }
  ): Promise<void> {
    await createFigmaPluginAsync({
      name,
      template: options.template,
      useDefaults: options.yes
    })
  })
  .parse(process.argv)
