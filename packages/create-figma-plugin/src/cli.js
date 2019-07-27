import sade from 'sade'
import { log } from '@create-figma-plugin/common'
import { createFigmaPlugin } from './create-figma-plugin'

sade('create-figma-plugin [name]', true)
  .option('-t, --template', 'Use a template')
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes, template }) {
    log.info('Scaffolding a new plugin...')
    await createFigmaPlugin({ name, template }, yes)
    log.success('Done')
  })
  .parse(process.argv)
