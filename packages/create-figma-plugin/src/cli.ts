#!/usr/bin/env node
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async.js'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma/FigJam plugin using a template')
  .option('-p, --path', 'Path to the directory to create the plugin in')
  .option('-t, --template', 'The name of the template to use')
  .action(async function (
    name: string,
    options: { path: string; template: string }
  ): Promise<void> {
    await createFigmaPluginAsync({
      name,
      path: options.path,
      template: options.template
    })
  })
  .parse(process.argv)
