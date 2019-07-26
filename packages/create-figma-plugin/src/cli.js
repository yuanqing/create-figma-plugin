import sade from 'sade'
import { build } from '@create-figma-plugin/build'
import { init } from '@create-figma-plugin/init'

const cli = sade('create-figma-plugin')

cli
  .command('build', 'Build the plugin')
  .option('-d, --development', 'Build in development mode', false)
  .action(async function ({ development }) {
    await build(development, false)
  })

cli
  .command('init [name]', 'Scaffold a new plugin', { default: true })
  .option('-t, --template', 'Use a template')
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes, template }) {
    await init({ name, template }, yes)
  })

cli
  .command('watch', 'Watch and rebuild the plugin on changes')
  .action(async function () {
    await build(true, true)
  })

cli.parse(process.argv)
