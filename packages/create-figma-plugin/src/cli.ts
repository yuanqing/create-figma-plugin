#!/usr/bin/env node
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async.js'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma plugin using a template')
  .option('-t, --template', 'The name of the template to use')
  .action(async function (
    name: undefined | string,
    options: { template?: string }
  ): Promise<void> {
    await createFigmaPluginAsync({
      name,
      template: options.template
    })
  })
  .parse(process.argv)
