import sade from 'sade'
import { createFigmaPlugin } from './create-figma-plugin'

sade('create-figma-plugin [name]', true)
  .option('-t, --template', 'Use a template')
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes: useDefault, template }) {
    await createFigmaPlugin({ name, template }, useDefault)
  })
  .parse(process.argv)
