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
  .command('init <name>', 'Scaffold a new plugin', { default: true })
  .action(async function (name) {
    await init(name)
  })

cli
  .command('watch', 'Watch and rebuild the plugin on changes')
  .action(async function () {
    await build(true, true)
  })

cli.parse(process.argv)
