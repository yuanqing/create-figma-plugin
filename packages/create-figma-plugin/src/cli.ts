#!/usr/bin/env node
import { Argv } from 'mri'
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async.js'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma/FigJam plugin using a template')
  .option('-t, --template', 'The name of the template to use')
  .action<[string]>(async function (
    name: string,
    options: Argv<{ template?: string }>
  ): Promise<void> {
    await createFigmaPluginAsync({
      name,
      template: options.template
    })
  })
  .parse(process.argv)
